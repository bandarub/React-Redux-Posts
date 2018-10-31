import React, { Component } from "react";
import { connect } from "react-redux";

import * as Types from "../actions";

import Form from "./Form";

class Createpost extends Component {
  state = {
    id: new Date().getUTCMilliseconds(),
    title: "",
    category: "",
    detail: "",
    isTouched: {
      title: false,
      category: false,
      detail: false
    }
  };
  handlePost = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleFocus = e => {
    const field = e.target.name;
    this.setState(prevState => ({
      isTouched: {
        ...prevState.isTouched,
        [field]: true
      }
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.new_post(this.state);
    this.props.history.push("/");
  };

  validate = (title, category, detail) => {
    const errors = {
      title: /^[\w.|\s|]{2,20}$/.test(title)
        ? ""
        : "please enter Title(must not excced 20 words)",
      category: /^[\w.|\s]{2,20}$/.test(category)
        ? ""
        : "please enter Category(must not exceed 20 words)",
      detail: /[\w]+[|\s.][\w]+$/.test(detail) ? "" : "please enter datails"
    };
    return errors;
  };
  isSubmitDisabled = errors => {
    return Object.values(errors).some(errMsg => {
      return errMsg;
    });
  };
  render() {
    const { title, category, detail } = this.state;
    const errors = this.validate(title, category, detail);
    return (
      <form onSubmit={this.handleSubmit}>
        <Form
          {...this.state}
          handlePost={this.handlePost}
          handleFocus={this.handleFocus}
          errors={errors}
        />
        <button type="submit" disabled={this.isSubmitDisabled(errors)}>
          Save
        </button>
        <button
          type="button"
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          Cancel
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    new_post : data => dispatch(Types.createPost(data))

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Createpost);
