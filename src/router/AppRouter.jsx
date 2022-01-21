import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "../components/Home";
import Redirect from "../components/RedirectPage";
import Dashboard from "../components/Dashboard";
import Error404 from "../components/Error404Page";


class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/redirect" component={Redirect} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={Error404} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

export default AppRouter;