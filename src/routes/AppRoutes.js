import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../screens/Home";
import ScrollToTop from "../components/common/ScrollTop";
import 'bootstrap/dist/css/bootstrap.min.css';

function AppRoutes(props) {
  return (
    <React.Fragment>
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default AppRoutes;
