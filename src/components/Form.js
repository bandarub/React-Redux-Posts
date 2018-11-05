import React from "react";

const Form = props => {
  return (
    <div className="form">
      <div>
        <input
          type="text"
          value={props.title}
          name="title"
          placeholder="Title"
          onChange={props.handlePost}
          onBlur={props.handleFocus}
        />
        <label>Title</label>
        {props.isTouched &&
          (props.isTouched.title && props.errors.title) && (
            <span className="errorMsg">{props.errors.title}</span>
          )}
      </div>
      <div>
        <input
          type="text"
          value={props.category}
          name="category"
          placeholder="Category"
          onChange={props.handlePost}
          onBlur={props.handleFocus}
        />
        <label>Category</label>
        {props.isTouched &&
          (props.isTouched.category && props.errors.category) && (
            <span className="errorMsg">{props.errors.category}</span>
          )}
      </div>
      <div>
        <textarea
          rows="10"
          value={props.detail}
          name="detail"
          placeholder="Write your Post"
          className="text-area"
          onChange={props.handlePost}
          onBlur={props.handleFocus}
        />
        <label>Write your Post</label>{" "}
        {props.isTouched &&
          (props.isTouched.detail && props.errors.detail) && (
            <span className="errorMsg">{props.errors.detail}</span>
          )}
      </div>
    </div>
  );
};

export default Form;
