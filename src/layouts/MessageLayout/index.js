import React, { Component, Fragment } from 'react';
import SimpleNavbar from 'containers/Navigation';
import Footer from 'containers/Footer';

class MessageLayout extends Component {
  render() {
    return (
      <Fragment>
        <SimpleNavbar />
        <div>
        MessageLayout
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default MessageLayout;