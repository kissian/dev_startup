import React, { Component, Fragment } from 'react';
import SimpleNavbar from 'containers/Navigation';
import Footer from 'containers/Footer';

class ProfileLayout extends Component {
  render() {
    return (
      <Fragment>
        <SimpleNavbar />
        <div>
          ProfileLayout
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default ProfileLayout;