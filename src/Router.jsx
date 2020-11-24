import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Quiz, Correct, Mistake } from "./Pages/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <React.Suspense fallback={<h1>Loding...</h1>}>
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/correct" component={Correct} />
          <Route exact path="/mistake" component={Mistake} />
        </React.Suspense>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
