import React, { Component, Fragment } from 'react';
import { Row, Grid } from 'react-bootstrap';
import './styles.scss';

import SimpleNavbar from 'containers/Navigation';
import Footer from 'containers/Footer';
import HomeSlider from 'containers/HomeSlider';

class MainLayout extends Component {
  render() {
    return (
      <Fragment>
        <SimpleNavbar />
        <Grid>
          <Row>
            <HomeSlider />
          </Row>
        </Grid>
        <Footer />
      </Fragment>
    )
  }
}

export default MainLayout;