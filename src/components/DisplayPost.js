import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as Types from "../actions";

const DisplayPost = props => {
  const id = Number(props.match.params.postId);
  const selctedPost = props.getSelectedPost(id);
  return (
    <div>
      <NavLink to="/" className="postRight">Posts</NavLink>
      <div>
        <h4>Title</h4>
        <p>{selctedPost.title}</p>
        <h4>Category</h4>
        <p>{selctedPost.category}</p>
        <h4>Content</h4>
        <p>{selctedPost.detail}</p>
        <div>
          <button id={id}>
            <NavLink to={`/posts/${selctedPost.id}/edit`}>Edit</NavLink>
          </button>
          <button
            id={id}
            onClick={() => {
              props.getPostDelete(id);
              props.history.push("/");
            }}
          >
            Delete{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getPostDelete: deletedId => {
      dispatch(Types.deletePost(deletedId))}

  };
};
export default connect(
  null,
  mapDispatchToProps
)(DisplayPost);
