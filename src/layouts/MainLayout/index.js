import React, { Component, Fragment } from 'react';
import SimpleNavbar from 'containers/Navigation';
import Footer from 'containers/Footer';
import HomeSlider from 'containers/HomeSlider';

class MainLayout extends Component {
  render() {
    return (
      <Fragment>
        <SimpleNavbar />
        <div>
          <HomeSlider />
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default MainLayout;