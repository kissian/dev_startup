import React, { Component, Fragment } from 'react';
import SimpleNavbar from 'containers/Navigation';
import Footer from 'containers/Footer';

class TeamLayout extends Component {
  render() {
    return (
      <Fragment>
        <SimpleNavbar />
        <div>
          TeamLayout
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default TeamLayout;