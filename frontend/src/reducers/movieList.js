import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  CHANGE_TAB
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
  
   
    case HOME_PAGE_LOADED:
      return {
        ...state,
        movieList: action.payload[0].articles
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case CHANGE_TAB:
      return {
        ...state,
        movieList: action.payload.articles
      };
    default:
      return state;
  }
};
