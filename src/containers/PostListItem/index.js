import { connect } from 'react-redux';
import { actionCreators as boardActions } from 'redux/modules/post';
import Container from './container';

const mapStateToProps = (state) => {
    const { user } = state;
    return {
        user
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (_id, name, comment, date) => {
        dispatch(boardActions.addComment(_id, name, comment, date));
    },
    togglePostLike: (_id) => {
        dispatch(boardActions.togglePostLike(_id));
    },
    togglePostComment: (_id) => {
        dispatch(boardActions.togglePostComment(_id));
    },
    removePost: (_id) => {
        dispatch(boardActions.removePost(_id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
