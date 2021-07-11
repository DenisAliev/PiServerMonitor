import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Layout from "./pages/Layout";
import Login from "./pages/Login";


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Route path='/' component={Login}/>
        </Layout>
    );
  }
}
