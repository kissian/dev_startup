import { connect } from 'react-redux';
import { actionCreators as boardActions } from 'redux/modules/post';
import Container from './container';

const mapDispatchToProps = dispatch => ({
    addComment: (id, name, comment, date) => {
        dispatch(boardActions.addComment(id, name, comment, date));
    },
    togglePostLike: (id) => {
        dispatch(boardActions.togglePostLike(id));
    },
    togglePostComment: (id) => {
        dispatch(boardActions.togglePostComment(id));
    },
    removePost: (id) => {
        dispatch(boardActions.removePost(id));
    },
});

export default connect(null, mapDispatchToProps)(Container);
