import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostListItem from './presenter';


class Container extends Component {
    state = {
        loading: true,
        slice: 3,
        boards: [],
    }

    componentDidMount() {
        const { boards } = this.props;
        const { loading } = this.state;
        this.setState({
            boards,
            loading: !loading,
        });
    }

    componentWillReceiveProps(nextProps) {
        const { boards } = nextProps;
        this.setState({
            boards,
            loading: false,
        });
    }

    updateBoards = () => {
        const { boards } = this.props;
        const { slice } = this.state;
        this.setState({
            boards: boards.slice(0, slice),
            loading: false,
        });
        // console.log('updateBoards',boards)
    }

    handleEnter = () => {
        const { loading, slice } = this.state;

        if (!loading) {
            this.setState({
                slice: slice + 3,
                loading: true,
            });
            setTimeout(() => this.updateBoards(), 1000);
        }
    }


    render() {
        const { loading, boards } = this.state;
        return (
            <PostListItem
                onEnter={this.handleEnter}
                boards={boards}
                loading={loading}
            />
        );
    }
}
Container.propTypes = {
    boards: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired
    })).isRequired,

};
export default Container;
