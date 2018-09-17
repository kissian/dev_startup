import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import SignupForm from './presenter';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }
    static propTypes = {
        // facebookLogin: PropTypes.func.isRequired,
        createAccount: PropTypes.func.isRequired
    }
    
    render() {
        const {
            email,
            password,
            firstName,
            lastName
        } = this.state;
        const { _handleChange, _handleSubmit, _handleFacebookLogin } = this;
        return (
            <SignupForm 
                email={email}
                lastName={lastName}
                firstName={firstName}
                password={password}
                handleChangeInput={_handleChange}
                handleSubmit={_handleSubmit}
                handleFacebookLogin={_handleFacebookLogin}
            />
        )
    }
    _handleChange = event => {
        const { target : { value, name } } = event;
        this.setState({
            [name]: value
        })
        // console.log(this.state);
    }
    _handleSubmit = event => {
        const {
            email,
            password,
            firstName,
            lastName
        } = this.state;
        const { createAccount } = this.props;
        event.preventDefault();
        createAccount(email, password, firstName, lastName);
        // console.log(this.state);
    }
}

export default Container;