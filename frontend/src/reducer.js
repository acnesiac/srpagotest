import movieList from './reducers/movieList';
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  movieList,
  auth,
  common,
  editor,
  home,
  router: routerReducer
});
