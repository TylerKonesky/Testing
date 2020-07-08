import React from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from 'actions';
import './App.css';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends React.Component{

  renderButton(){
    switch(this.props.auth){
      case true: 
        return(
          <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
        )
      default:
        return(
          <button onClick={ ()=> this.props.changeAuth(true)}>Sign In</button>
        )
    }
  }

  renderHeader(){
    return(
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        {this.renderButton()}
      </ul>
    )
  }
  render(){
    return(
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox}></Route>
        <Route exact path="/" component={CommentList}></Route>
      
      </div>
    )
  }
}

function mapStateToProps({auth}){
  return {auth}
}

export default connect(mapStateToProps, actions)(App);
