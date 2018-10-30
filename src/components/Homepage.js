import React, { Component } from "react";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PostIndex from "./PostIndex";
import * as Types from "../actions";

class Home extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <NavLink exact to="/newpost">
          {" "}
          <button type="button" className="addPost postRight">
            Add Post
          </button>
        </NavLink>
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
