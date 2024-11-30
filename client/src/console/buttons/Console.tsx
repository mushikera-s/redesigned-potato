import * as React from "react";
import { Range } from "immutable";
import { ConsoleState } from "../Entities";
import { useNavigate } from "react-router-dom";
import { DispatchActions } from "../DispatchActions";

interface Props {
    state: ConsoleState;
    actions: DispatchActions;
}

const ConsoleRoot: React.FC<Props> = (props) => {
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('ConsoleRoot Props:', props);  // デバッグ用ログ
        props.actions.loadQuestions();
    }, [props.actions]);

    const showQuiz = (n: number) => {
        props.actions.showQuiz(n);
    };

    const showAnswer = (n: number) => {
        props.actions.showAnswer(n);
    };

    const buttons = Range(1, props.state.questions.length + 1).map((n) => {
        const quizClass = props.state.showedQuizs.contains(n) ? 'btn-default' : 'btn-primary';
        const answerClass = props.state.showedAnswers.contains(n) ? 'btn-default' : 'btn-primary';
        return (
            <div key={n}>
                <p>問題{n}</p>
                <button type="button" className={`btn ${quizClass}`} style={{ margin: "15px" }} onClick={() => showQuiz(n)}>問題{n}</button>
                <button type="button" className={`btn ${answerClass}`} style={{ margin: "15px" }} onClick={() => showAnswer(n)}>回答{n}</button>
            </div>
        );
    });

    return (
        <div>
            <h2>管理コンソール</h2>
            {buttons}
            <button className="btn btn-primary" style={{ margin: "15px" }} onClick={() => navigate('/ranking')}>go ランキング</button>
        </div>
    );
};

export default ConsoleRoot;
