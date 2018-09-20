// imports
import fakeBoards from 'lib/fakeBoards';

// actions type
const CREATE_BOARD = 'post/CREATE_BOARD';
const REMOVE_BOARD = 'post/REMOVE_BOARD';
const EDIT_BOARD = 'post/EDIT_BOARD';
const TOGGLE_BOARD_LIKE = 'post/TOGGLE_BOARD_LIKE';
const TOGGLE_BOARD_COMMENT = 'post/TOGGLE_BOARD_COMMENT';
const ADD_BOARD_COMMENT = 'post/ADD_BOARD_COMMENT';

// action creators
function createBoard(
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
) {
  return {
      type: CREATE_BOARD,
      payload: {
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
      },
  };
}


const togglePostLike = id => ({
  type: TOGGLE_BOARD_LIKE,
  payload: id,
});

const addComment = (id, name, comment, date) => ({
  type: ADD_BOARD_COMMENT,
  payload: {
      id, name, comment, date,
  },
});

const togglePostComment = id => ({
  type: TOGGLE_BOARD_COMMENT,
  payload: id,
});

const removePost = id => ({
  type: REMOVE_BOARD,
  payload: id,
});

// API actions

// initial state
const initialState = {
  boards: [...fakeBoards],
}
// reducer
function reducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case CREATE_BOARD: {
      return applyCreateBoard(state, payload);
    }
    case REMOVE_BOARD: {
      return applyRemoveBoard(state, payload);
    }
    case TOGGLE_BOARD_LIKE: {
      return applyToggleLikeBoard(state, payload);
    }
    case TOGGLE_BOARD_COMMENT: {
      return applyToggleCommentBoard(state, payload);
    }
    case ADD_BOARD_COMMENT: {
      return applyCreateBoardComment(state, payload);
    }
    default:
      return state;
  }
}

// reducer functions
function applyCreateBoard(state, payload) {
  const newId = state.boards[0].index + 1;
  const { 
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
  } = payload;
  const updateBoards = [
    {
      _id,
      index: newId,
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
  return { state, boards: updateBoards};
}

function applyRemoveBoard(state, payload) {
  const { boards } = state;
  return {
    ...state,
    boards: boards.filter(({ index }) => index !== payload),
  }
};

function applyToggleLikeBoard(state, payload) {
  const updatedState = { ...state };
  const { boards } = state;
  const newBoard = boards.map((board) => {
      if (board.index === payload) {
          const updatedBoard = { ...board };
          updatedBoard.like = !board.like;
          updatedBoard.likeCount = board.likeCount + (board.like ? -1 : 1);
          return updatedBoard;
      }
      return board;
  });
  updatedState.boards = newBoard;
  return updatedState;
};

function applyToggleCommentBoard(state, payload) {
  const { boards } = state;
  const newBoard = boards.map((board) => {
      if (board.index === payload) {
          return { ...board, showComment: !board.showComment };
      }
      return board;
  });
  return { ...state, boards: newBoard };
}

function applyCreateBoardComment(state, payload) {
  const {
      id,
      name,
      comment,
      date,
  } = payload;
  const { boards } = state;
  const newBoardComment = boards.map((board) => {
      if (board.index === id) {
          return {
              // id를 추가해야함
              ...board,
              comments: [
                  ...board.comments,
                  {
                    id: board.comments.length,
                    name,
                    comment,
                    date,
                  },
              ],
          };
      }
      return board;
  });
  return { ...state, boards: newBoardComment };
}

// exports
const actionCreators = {
  createBoard,
  removePost,
  togglePostLike,
  togglePostComment,
  addComment,
}

export { actionCreators };

// export reducer by default
export default reducer;
