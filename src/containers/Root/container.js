import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Layout components import
import LoginLayout from 'layouts/LoginLayout';

// import TeamLayout from 'layouts/TeamLayout';
import MainLayout from 'layouts/MainLayout';
// import ProfileLayout from 'layouts/ProfileLayout';
// import MessageLayout from 'layouts/MessageLayout';
import BellLayout from 'layouts/BellLayout';

class Root extends Component {
  
  renderLoggedInRouter() {
    return (
          <Switch>
              {/* <Route path="/myteam" component={TeamLayout} />
              <Route path="/profile/edit" component={TeamLayout} />
              <Route path="/noti" component={TeamLayout} />
              <Route path="/messages/:id" component={MessageLayout} />
              <Route path="/messages" component={MessageLayout} />
              <Route path="/profile/:tabName" component={ProfileLayout} />
              <Route path="/profile" component={ProfileLayout} /> */}
              <Route path="/bell" component={BellLayout} />
              <Route path="/" component={MainLayout} />
          </Switch>
    );
  }
  renderLoggedOutRouter() {
    return (
          <Switch>
              {/* <Route path="/" component={LoginLayout} /> */}
              <Route path="/" render={() => "test login true"} />
          </Switch>
    );
  }

  render() {
    const { user: { isLoggedIn } } = this.props;
    return (
      <Router>
        {!isLoggedIn ? this.renderLoggedOutRouter() : this.renderLoggedInRouter()}
      </Router>
    ) 
  }
}

Root.defaultProps = {
  user: {}
}
Root.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
  }),
}
export default Root;