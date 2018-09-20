import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Moment extends Component {
    TimesDiff = () => {
        const {
            date,
        } = this.props;
        const times = moment(date, 'YYYYMMDD').fromNow();
        return times;
    }

    render() {
        return (
            <span>
                {this.TimesDiff()}
            </span>
        );
    }
}

Moment.propTypes = {
    date: PropTypes.string.isRequired,
};
export default Moment;
