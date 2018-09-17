import { connect } from 'react-redux';
import { actionCreators as boardCreators } from 'redux/modules/boards';
import Container from './container';

const mapStateToProps = (state) => {
  const { boards } = state;
  return {
    boards,
  }
}
const mapDispatchToProps = dispatch => ({
  createBoard: (
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
    dispatch(boardCreators.createBoard(
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)