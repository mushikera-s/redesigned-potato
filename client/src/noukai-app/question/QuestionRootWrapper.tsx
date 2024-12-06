import * as React from "react";
import { connect } from "react-redux";
import QuestionRoot from "./QuestionRoot";
import { Dispatch } from "redux";
import { DispatchActions } from "../DispatchActions";
import { useParams } from "react-router-dom";
import { NoukaiState } from "../Entities";

interface Props {
    noukaiState: NoukaiState;
    actions: DispatchActions;
}

const QuestionRootWrapper: React.FC<Props> = (props) => {
  const { userId, dept } = useParams<{ userId: string; dept: string }>();

  return <QuestionRoot {...props} userId={userId} dept={dept} />;
};

const mapStateToProps = (state: any) => ({
  noukaiState: state.noukai,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: new DispatchActions(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionRootWrapper);
