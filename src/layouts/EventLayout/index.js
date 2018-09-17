import React, { Component, Fragment } from 'react';
import SimpleNavbar from 'containers/Navigation';
import Footer from 'containers/Footer';

class EventLayout extends Component {
  render() {
    return (
      <Fragment>
        <SimpleNavbar />
        <div>
          EventLayout
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default EventLayout;