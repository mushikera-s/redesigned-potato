import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ConsoleState, Score } from "../Entities";
import { DispatchActions } from "../DispatchActions";

interface Props {
  state: ConsoleState;
  rank: number;
  actions: DispatchActions;
}

const ConsoleRoot: React.FC<Props> = ({ state, rank, actions }) => {
  const navigate = useNavigate();

  useEffect(() => {
    actions.rankList();
  }, [actions]);

  if (state.ranking.length === 0) return <p>loading</p>;

  const score: Score = state.ranking.find(v => v.rank === rank)!;  // `find`メソッドを使用
  let nextButton: any = null;

  if (score.rank > 1) {
    nextButton = (
      <button
        className="btn btn-danger btn-lg"
        onClick={() => navigate(`/ranking/${score.rank - 1}`)}
      >
        第{score.rank - 1}位
      </button>
    );
  } else {
    nextButton = (
      <button
        className="btn btn-info one-more-thing"
        onClick={() => navigate(`/console`)}
      >
        もうちっとだけ続くんじゃ
      </button>
    );
  }

  return (
    <div className="panel panel-default panel-top5 col-xs-10 col-xs-offset-1 text-center">
      <h1>
        <span className="glyphicon glyphicon-star" style={{ color: "orange" }} />
        第{score.rank}位
      </h1>
      <h3>{score.name}</h3>
      <h4>
        正解数: {score.correctNum}, 回答時間: {score.time} 秒
      </h4>
      {nextButton}
    </div>
  );
};

export default ConsoleRoot;
