import React, { Component } from 'react';

import './App.css';
import { connect } from 'react-redux';

// import Createpost from './components/CreatePost';
// import Home from './components/Homepage';
import Routing from './components/Links';

class App extends Component {
	render() {	
		return (
			<div className="App">
				<Routing />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts
	}
  }
  
export default connect(mapStateToProps, null)(App);

