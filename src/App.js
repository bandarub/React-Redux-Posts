import React, { Component } from 'react';
import { connect } from 'react-redux';

import Routing from './components/Links';
import Footer from "./components/Footer";

import './App.css';

class App extends Component {
	getSelectedPost = (id) => { 
		const {posts} = this.props;
		let foundPost;
		for(let post of posts){
			if(post.id === id){
				foundPost = post;
			}
		}		
		return foundPost;
	}
	render() {	
		const { posts } = this.props;
		return (
			<div className="App">
				<Routing posts={posts} getSelectedPost={this.getSelectedPost}/>
				<Footer/>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		posts: state
	}
  }
  
export default connect(mapStateToProps, null)(App);

