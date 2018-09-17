// imports

// actions type
const CREATE_BOARD = 'boards/CREATE_BOARD';
const REMOVE_BOARD = 'boards/REMOVE_BOARD';
const EDIT_BOARD = 'boards/EDIT_BOARD';

// action creators
function createBoard(
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
) {
  return {
      type: CREATE_BOARD,
      payload: {
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
      },
  };
}

// API actions

// initial state
const initialState = {
  boards: []
}
// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOARD: {
      return applyCreateBoard(state, action);
    }
    default:
      return state;
  }
}

// reducer functions
function applyCreateBoard(state, action) {
  const { payload: {
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
  } } = action;
  const updateBoards = [
    {
      ...state,
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
    }, ...state.boards
  ]
  state.boards = updateBoards
  return state;
}

// exports
const actionCreators = {
  createBoard,
}

export { actionCreators };

// export reducer by default
export default reducer;
