// ConsoleRootWrapper.tsx
import React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import ConsoleRoot from "../buttons/Root";
import { DispatchActions } from "../DispatchActions";

function mapStateToProps(state: any): any {
  return { state: state.consoleCommand };
}

function mapDispatchToProps(dispatch: Dispatch<any>): any {
  return {
    actions: new DispatchActions(dispatch),
  };
}

const ConsoleRootWrapper = (props: any) => <ConsoleRoot {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(ConsoleRootWrapper);
