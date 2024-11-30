import * as React from "react";
import { useState, useEffect } from "react";
import { ConsoleState, Score } from "../Entities";
import { List } from "immutable";
import { useNavigate } from "react-router-dom";
import { DispatchActions } from "../DispatchActions";

interface Props {
    state: ConsoleState;
    actions: DispatchActions;
}

const Ranking: React.FC<Props> = (props) => {
    const [ranking, setRanking] = useState<List<Score>>(List.of<Score>());
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Ranking Props:', props);  // デバッグ用ログ
        props.actions.rankList();
    }, [props.actions]);

    const goNext = (rank: number) => {
        if (rank <= 5) return;

        const calcTime = (rank: number): number => {
            if (rank <= 10) return 1000;
            if (rank <= 50) return 200;
            return 0;
        };

        setTimeout(() => {
            if (props.state.ranking.length > 0) {
                const score = props.state.ranking[rank - 1];
                const newRanking = ranking.push(score);
                setRanking(newRanking);
                goNext(rank - 1);
            }
        }, calcTime(rank));
    };

    const rankASC = ranking.reverse();
    const ranks = rankASC.map((score: Score) =>
        <li key={score.rank} className="list-group-item text-center">
            <span className="glyphicon glyphicon-star" style={{ color: "orange" }} />
            {score.rank}位 {score.name}： 正解数 {score.correctNum}, 回答時間 {score.time} 秒
        </li>
    );

    let nextButton = <h3 className="text-center">50位 〜 6位</h3>;
    if (rankASC.size === 0) {
        nextButton = <button className="btn btn-danger btn-lg center-block" onClick={() => goNext(props.state.ranking.length)}>スタート</button>;
    } else if (rankASC.get(0).rank === 6) {
        nextButton = <button className="btn btn-danger btn-lg center-block" onClick={() => navigate("/ranking/5")}>第5位</button>;
    }

    return (
        <div className="ranking container">
            <div className="row">
                <div className="panel panel-default panel-ranking col-xs-10 col-xs-offset-1">
                    <h2 className="text-center">ランク発表</h2>
                    {nextButton}
                </div>
            </div>
            <ul className="list-group">
                {ranks}
            </ul>
            {ranks.size === 0 && <h3 className="text-center">正解者がいません</h3>}
        </div>
    );
};

export default Ranking;
