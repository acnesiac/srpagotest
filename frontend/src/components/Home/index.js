import MainView from './MainView';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: HOME_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
  
  componentWillMount() {
    const articlesPromise = agent.Movies.all;
    this.props.onLoad(
      Promise.all([ 
                  articlesPromise()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }
  
  render() {
    return (
      <div className="container">       
            <MainView />
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
