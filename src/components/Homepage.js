import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import PostIndex from "./PostIndex";

import Navigation from "./Navigation";

class Home extends Component {
  state = {
    posts: this.props.posts
  };
  handleSearch = e => {
    const { posts } = this.props;
    let matches = posts.filter(post =>
      post.category.toLowerCase().includes(e.target.value)
    );
    this.setState({posts:matches});
  };
  render() {
    const { posts } = this.state;
    return (
      <div className="home">
        <input
          className="search"
          type="text"
          placeholder="Search Category"
          onChange={this.handleSearch}
        />
        <div className="postSummery">
          {posts.map(post => (
            <PostIndex key={post.id} post={post} history={this.props.history} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
