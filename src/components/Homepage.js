import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import PostIndex from "./PostIndex";

import Navigation from "./Navigation";

class Home extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="post-index">
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
