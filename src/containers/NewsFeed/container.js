import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import LoadingTimeline from 'components/Loadings/LoadingTimeline';
import NewsFeed from './presenter';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            history: '',
            whether: '전체공개',
            loading: true,
            boards: []
        };
    }
    componentDidMount() {
        const { loading } = this.state;
        const { boards } = this.props;
        setTimeout(() => {
            this.setState({
                loading: !loading,
                boards,
            });
        }, 3000);
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps);
    //     const { boards } = nextProps;
    //     this.setState({
    //         boards,
    //     });
    // }
    
    
    handleChange = (e) => {
        const { target: { name, value } } = e;
        this.setState({
            [name]: value,
        });
    }

    handleFileChange = (e) => {
        const { url } = e[0].preview;
        this.setState({
            history: url,
        });
    }

    // event.diff(start)
    handleSubmit = (e) => {
        e.preventDefault();
        const { user: { _id, profile: { nickname, profileImage } }, createBoard } = this.props;
        const { title, history, whether } = this.state;
        const date = moment().format('YYYY-MM-DDTHH:mm:ssZ');
        const like = false;
        const showComment = false;
        const likeCount = 0;
        const from = 'sponb team';
        const comments = [];

        createBoard(
            _id,
            nickname,
            profileImage,
            likeCount,
            like,
            showComment,
            title,
            date,
            from,
            history,
            whether,
            comments,
        );
        this.setState({
            history: '',
            whether: '전체공개',
            title: '',
        });
    };

    render() {
        const {
            user,
        } = this.props;
        const {
            boards, history, title, loading,
        } = this.state;
        const {
            handleChange,
            handleFileChange,
            handleSubmit,
        } = this;
        console.log(boards)
        if (loading) return <LoadingTimeline />;
        return (
            <NewsFeed
                user={user}
                history={history}
                title={title}
                boards={boards}
                onChange={handleChange}
                onFileChange={handleFileChange}
                onSubmit={handleSubmit}
            />
        );
    }
}

Container.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    user: PropTypes.object.isRequired,
    boards: PropTypes.arrayOf(PropTypes.object).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    createBoard: PropTypes.func.isRequired,
};

export default Container;
