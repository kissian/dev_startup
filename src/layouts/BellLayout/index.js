import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import BellNavbar from 'containers/BellNavbar';
import Footer from 'containers/Footer';
import NewsFeed from 'containers/NewsFeed';

class BellLayout extends Component {
  render() {
    return (
      <Fragment>
        <BellNavbar />
        <Grid>
          <Row>
            <Col md={5}>
              <NewsFeed />
            </Col>
          </Row>
        </Grid>
        <Footer />
      </Fragment>
    )
  }
}

export default BellLayout;