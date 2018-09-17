import React, { Component } from 'react';
import Navigation from './presenter';


class Container extends Component {
    state = {
        isToggleOn : false,
        user_id:'',
        user_pw:''
    }
    handleToggleClick = () => {
        this.setState(prevState => ({
            isToggleOn : !prevState.isToggleOn
        }))
    }

    render() {
        const { handleToggleClick } = this;
        const { isToggleOn } = this.state;
        const { user: { isLoggedIn }, logout } = this.props;

        return (
            <Navigation 
                toggle={handleToggleClick}
                isToggleOn={isToggleOn}
                isLoggedIn={isLoggedIn}
                logout={logout}
            />
        )
    }

}

export default Container;