import { connect } from "react-redux";
import { Dispatch } from "redux";
import Console from "./Console";
import { DispatchActions } from "../DispatchActions";  // インポートのパスを確認

function mapStateToProps(state: any): any {
  return { state: state.consoleCommand };  // stateの正しいプロパティを確認
}

function mapDispatchToProps(dispatch: Dispatch<any>): any {
  return {
    actions: new DispatchActions(dispatch),  // DispatchActionsを正しく渡す
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Console);
