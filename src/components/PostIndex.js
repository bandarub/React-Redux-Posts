import React, { Component } from "react";

import { connect } from "react-redux";
import {Link} from 'react-router-dom';


const PostIndex = props => {
  const post = props.post;
  return (
    <Link exact='true' to={`posts/${post.id}`} className="small-post">      
      <label id={post.id}>{post.title} </label>
      <label id={post.id}>{post.category}</label>
    </Link>
  );
};

export default PostIndex;
