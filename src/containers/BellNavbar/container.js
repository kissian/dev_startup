import React, { Component } from 'react';
import Navigation from './presenter';


class Container extends Component {
    
    render() {
        const { user: { isLoggedIn }, logout } = this.props;
        console.log(this.props.user);
        return (
            <Navigation 
                isLoggedIn={isLoggedIn}
                logout={logout}
            />
        )
    }

}

export default Container;