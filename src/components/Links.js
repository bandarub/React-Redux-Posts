import React,{ Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
  }from 'react-router-dom';
import { connect } from 'react-redux';


import Createpost from './CreatePost';
import Home from './Homepage';
import DisplayPost from './DisplayPost';
import Editing  from './Editing';

class  Routing extends Component{

	getSelectedPost = (id) => { 
		const {posts} = this.props;
		let foundPost;
		for(let post of posts){
			if(post.id === id){
				foundPost = post;
			}
			// foundPost;
		}		
		return foundPost;
	}
	render(){
    return(<div>
        	 <Router>
				<div>				
				<Route exact path='/newpost' render={(props)=>(<Createpost {...props} action='Submit'  />)}/>
				<Route exact path='/' render={(props)=>(<Home {...props}/>)}/>	
				<Route exact path='/posts/:postId' render={(props)=>(<DisplayPost {...props} getPost={this.getSelectedPost}/>)}/>
				<Route exact path = '/posts/:postId/edit'  render = {(props)=>(<Editing {...props} getPost={this.getSelectedPost} id={this.id} />)}/>			
				</div>
			</Router> 
    </div>)
}
}
const mapStateToProps = state => {
	return {
		posts: state
	}
  }
  
export default connect(mapStateToProps, null)(Routing);
