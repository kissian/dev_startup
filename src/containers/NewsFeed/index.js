import { connect } from 'react-redux';
import { actionCreators as boardActions } from 'redux/modules/post';
import Container from './container';

const mapStateToProps = (state) => {
    const { user, post: { boards } } = state;
    return {
        user, boards,
    };
};

const mapDispatchToProps = dispatch => ({
    createBoard: (
        id,
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
    ) => {
        dispatch(boardActions.createBoard(
            id,
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
        ));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
