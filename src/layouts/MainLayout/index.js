import React, { Component, Fragment } from 'react';
import SimpleNavbar from 'containers/Navigation';
import Footer from 'containers/Footer';

class MainLayout extends Component {
  render() {
    return (
      <Fragment>
        <SimpleNavbar />
        <div>
          MainLayout
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default MainLayout;