import { combineReducers, createStore, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createHistory from "history/createBrowserHistory";
import thunkMiddleware from "redux-thunk";
import user from "redux/modules/user";
import post from 'redux/modules/post';
import cards from 'redux/modules/cards';
import { i18nState } from "redux-i18n";

const env = process.env.NODE_ENV;

const history = createHistory();

const middlewares = [thunkMiddleware, routerMiddleware(history)];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  user,
  post,
  cards,
  routing: routerReducer,
  i18nState
});

let store;

if (env === "development") {
  store = initialState => createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };

export default store();