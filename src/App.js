import React from "react";
import { withRouter } from "react-router-dom";
import Routes from "./routing/routes";

const App = () => {
  return (
    <Routes />
  );
};

export default withRouter(App);
