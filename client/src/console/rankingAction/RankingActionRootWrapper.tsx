import { connect } from "react-redux";
import { Dispatch } from "redux";
import Ranking from "./Ranking";  // Rankingコンポーネントをインポート
import { DispatchActions } from "../DispatchActions";  // DispatchActionsをインポート

function mapStateToProps(state: any): any {
  return { state: state.consoleCommand };  // Reduxストアのstateをマッピング
}

function mapDispatchToProps(dispatch: Dispatch<any>): any {
  return {
    actions: new DispatchActions(dispatch),  // Reduxストアのアクションをマッピング
  };
}

const RankingActionRootWrapper = (props: any) => <Ranking {...props} />;  // Propsを渡してRankingコンポーネントをラップ

export default connect(mapStateToProps, mapDispatchToProps)(RankingActionRootWrapper);
