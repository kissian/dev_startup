import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import SimpleNavbar from 'containers/Navigation';
import Footer from 'containers/Footer';
import Auth from 'components/Auth';

class LoginLayout extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route path="/" component={Auth} />
      </Switch>
    )
  }

  render() {
    return (
      <Fragment>
        <SimpleNavbar />
        {this.renderRouter()}
        <Footer />
      </Fragment>
    )
  }
}

export default LoginLayout;