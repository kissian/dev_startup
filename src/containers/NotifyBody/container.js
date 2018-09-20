import React, { Component } from 'react';
import NotifyBody from './presenter';

class Contaienr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifys: []
    }
  }

  componentDidMount() {

  }
  
  render() {
    return (
      <NotifyBody />
    )
  }
}

export default Contaienr;