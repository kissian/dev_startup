import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './presenter';

class Container extends Component {
  state = {
    email:'',
    password:''
  }
  static propTypes = {
    usernameLogin: PropTypes.func.isRequired
  }
  render() {
    const {
      email,
      password
    } = this.state;
    const { _handleChange, _handleSubmit } = this;
    return (
      <LoginForm 
        email={email}
        password={password}
        handleChange={_handleChange}
        handleSubmit={_handleSubmit}
      />
    )
  }

/* handle event */
  _handleChange = event => {
    const { target : { value, name }} = event;
    this.setState({
        [name]: value
    })
  };

  _handleSubmit = event => {
    const { usernameLogin } = this.props;
    const { email, password } = this.state;
    event.preventDefault();
    usernameLogin(email, password);
  }

}

export default Container;