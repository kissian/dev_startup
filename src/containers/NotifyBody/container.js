import React, { Component } from 'react';
import NotifyBody from './presenter';

class Contaienr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: []
    }
  }
  componentDidMount() {
    const { boards } = this.props;
    this.setState({
      boards
    })
  }
  componentWillReceiveProps(nextProps) {
    const { boards } = nextProps;
    this.setState({
      boards
    })
  }
  render() {
    const { boards } = this.state;
    return (
      <NotifyBody
        boards={boards}
      />
    )
  }
}

export default Contaienr;