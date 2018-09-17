import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import "./styles.scss";

import Navigation from 'containers/Navigation';
import Footer from 'containers/Footer';

/* Route */
import Main from 'layouts/Main';

import Auth from '../Auth';

const App = props => [
  <Navigation key={1} />,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
  <Footer key={3} />
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" render={() => <Main />} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" render={() => <Auth />}/>
    <Route path="/recover" render={() => "recover password"} />
  </Switch>
);

export default App;