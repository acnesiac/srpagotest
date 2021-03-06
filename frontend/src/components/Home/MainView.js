import MovieList from '../MovieList';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';

const MoviesTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick(
     agent.Movies.all());
  };
  return (
    <li className="nav-item">
      <a
        href=""
        onClick={clickHandler}>
        actualizar
      </a>
    </li>
  );
};

const mapStateToProps = state => ({
  ...state.movieList,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onTabClick: (
    payload) => dispatch({ type: CHANGE_TAB, 
                        payload })
});

const MainView = props => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <MoviesTab
            token={props.token}
            tab={props.tab}
            onTabClick={props.onTabClick} />
        </ul>
      </div>

      <MovieList
        movies={props.movieList}
         />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
