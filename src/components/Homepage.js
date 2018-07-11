import React,{ Component } from 'react';

import { connect } from 'react-redux';
import {
   
    NavLink
  }from 'react-router-dom';
import PostIndex from './PostIndex';

class  Home extends Component{

    constructor(props){
        super(props);
        this.state={data:this.props.data} }
    render(){  
           
    return(<div>
        <h1 className='add-post'><NavLink exact to='/newpost'>Add Post</NavLink></h1>
        <div className='postSummery'>
        {this.props.data.map((post)=>
        <PostIndex key={Math.random()}  post={post} {...post} history={this.props.history} />)} 
        </div>                            
    </div>)}
}

const mapStateToProps = state => {
	return {
		data: state
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getData: data => dispatch({ type: 'POSTS_INDEX', data })
	};
};
export default connect(
    mapStateToProps,
    mapDispatchToProps	
)(Home);