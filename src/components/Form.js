import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as Types from "../actions";

const Form = props => {
  return (
    <div>
      <label>Title:</label>{" "}
      <input
        type="text"
        value={props.title}
        name="title"
        onChange={props.handlePost}
        onBlur={props.handleFocus}
      />
      {props.isTouched&&(props.isTouched.title &&
        props.errors.title)&&<span className="errorMsg">{props.errors.title}</span>}
        <label>Category:</label>{" "}
      <input
        type="text"
        value={props.category}
        name="category"
        onChange={props.handlePost}
        onBlur={props.handleFocus}
      />
      {props.isTouched&&(props.isTouched.category &&
        props.errors.category )&& <span className="errorMsg">{props.errors.category}</span>}
    <label>Post Content:</label>{" "}
    <textarea
        rows="10"
        value={props.detail}
        name="detail"
        className="text-area"
        onChange={props.handlePost}
        onBlur={props.handleFocus}
      />
      {props.isTouched&&(props.isTouched.detail &&
        props.errors.detail )&& <span className="errorMsg">{props.errors.detail}</span>}
    </div>
  );
};

export default Form;
