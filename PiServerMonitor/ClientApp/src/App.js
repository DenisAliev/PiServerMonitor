import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import ControlPanel from "./pages/ControlPanel";
import PrivateRoute from "./components/PrivateRoute";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={Login}/>
                <PrivateRoute path='/panel' component={ControlPanel}/>
            </Switch>
        </Layout>
    );
  }
}
