import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useParams } from "react-router-dom";
import Ranking from "./Ranking";  // Rankingコンポーネントをインポート
import { DispatchActions } from "../DispatchActions";  // DispatchActionsをインポート
import { ConsoleState } from "../Entities";

interface RootState {
  consoleCommand: ConsoleState;
}

const RankingRootWrapper: React.FC<any> = (props) => {
  const { rank } = useParams<{ rank: string }>();

  return <Ranking {...props} rank={Number(rank)} />;
};

const mapStateToProps = (state: RootState) => ({
  state: state.consoleCommand,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: new DispatchActions(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RankingRootWrapper);
