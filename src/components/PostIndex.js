import React from "react";

import { NavLink } from "react-router-dom";

const PostIndex = props => {
  const { post } = props;
  return (
    <ul className="small-post">
      <div className="post-heading">
        <div>
          <li className="post-title">{post.title} </li>
          <li className="post-category"> # {post.category} </li>
        </div>
      </div>
      <p className="post-summary">
        {post.detail.slice(0, 170)}
        ...
      </p>
      <NavLink to={`posts/${post.id}`}>Read More</NavLink>
    </ul>
  );
};

export default PostIndex;
