// imports
import fakeProperties from 'lib/fakeProperties';

// actions type
const CREATE_CRAD = 'cards/CREATE_CRAD';
const REMOVE_CARD = 'cards/REMOVE_CARD';
const EDIT_CARD = 'cards/EDIT_CARD';

// action creators
function createCard(
  _id,
  index,
  price,
  picture,
  city,
  address,
  latitude,
  longitude,
  bedrooms,
  bathrooms,
  carSpaces
) {
 return {
   type: CREATE_CRAD,
   payload: {
    _id,
    index,
    price,
    picture,
    city,
    address,
    latitude,
    longitude,
    bedrooms,
    bathrooms,
    carSpaces
   },
 };
}

// API actions

// initial state
const initialState = {
  properties: [...fakeProperties]
}
// reducer
function reducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case CREATE_CRAD: {
      return applyCreateBoard(state, payload);
    }
    default:
      return state;
  }
}

// reducer functions
function applyCreateBoard(state, payload) {
  const {
    _id,
    index,
    price,
    picture,
    city,
    address,
    latitude,
    longitude,
    bedrooms,
    bathrooms,
    carSpaces
  } = payload;
  const createCardItem = [
    {
      ...state,
      _id,
      index,
      price,
      picture,
      city,
      address,
      latitude,
      longitude,
      bedrooms,
      bathrooms,
      carSpaces
    }, ...state.properties
  ]

  state.properties = createCardItem
  return state;
}

// exports
const actionCreators = {
  createCard,
}

export { actionCreators };

// export reducer by default
export default reducer;
