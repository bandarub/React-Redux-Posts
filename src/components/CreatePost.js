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
  handleCancel = () => {
    this.props.history.push("/");
  };
  validate = (title, category, detail) => {
    const errors = {
      title: /^[a-zA-Z.|\s]{2,20}$/.test(title)
        ? ""
        : "please enter Title(must not excced 20 words)",
      category: /^[a-zA-Z.|\s]{2,20}$/.test(category)
        ? ""
        : "please enter Category(must not exceed 20 words",
      detail: /[a-zA-Z]+[\s.][a-zA-Z]+$/.test(detail)
        ? ""
        : "please enter datails"
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
        <div className="buttonsGrp">
          <button type="submit" disabled={this.isSubmitDisabled(errors)}>
            Save
          </button>
          <button type="button" onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
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
    new_post: (data, id) => dispatch({ type: Types.CREATE_POST, data, id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Createpost);
