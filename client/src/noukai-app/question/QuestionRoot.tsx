import * as React from "react";
import { NoukaiState } from "../Entities";
import StandbyComponent from "./StandbyComponent";
import AnswerComponent from "./AnswerComponent";
import { DispatchActions } from "../DispatchActions";
import objectAssign = require('object-assign');
// const ReactSound = require('react-sound');  // コメントアウト

interface Props {
    noukaiState: NoukaiState;
    actions: DispatchActions;
    userId?: string;
    dept?: string;
}

const QuestionRoot: React.FC<Props> = ({ noukaiState, actions, userId, dept }) => {
    const [isAction, setIsAction] = React.useState(false);

    React.useEffect(() => {
        if (userId && dept) {
            actions.requestWebSocketConnection(userId, dept);
            actions.loadQuestions();
        }
    }, [userId, dept, actions]);

    const doAction = () => {
        if (isAction) return;
        actions.doAction(noukaiState.ws);
        setIsAction(true);
    };

    const mainContents = noukaiState.isBetweenQuiz
        ? <StandbyComponent state={noukaiState} actions={actions} />
        : <AnswerComponent state={noukaiState} actions={actions} />;

    const clickableSay = isAction ? " < にゃ〜ん" : "";
    return (
        <div className="question container">
            {mainContents}
            <footer className="footer">
                <div className="footer-content">
                    <div className="text-center">
                        <img
                            alt="daisuke"
                            onClick={doAction}
                            className="img-circle"
                            src="/public/maru.png" />
                        <span style={{ verticalAlign: "middle" }}>{clickableSay}</span>
                        {/* 
                        <ReactSound
                            url="/public/sound.mp3"
                            playStatus={isAction ? ReactSound.status.PLAYING : ReactSound.status.STOPPED}
                            onFinishedPlaying={() => setIsAction(false)} 
                        /> 
                        */}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default QuestionRoot;
