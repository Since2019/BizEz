import React, { Fragment } from "react";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Form from "./components/Form";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Form} />
      </Switch>
    </Fragment>
  );
};

export default App;
