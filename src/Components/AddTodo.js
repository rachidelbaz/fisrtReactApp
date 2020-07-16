import React, { Component } from "react";
import PropsType from "prop-types";
export default class AddTodo extends Component {
  state = {
    text: "",
  };
  submitForm = (e) => {
    e.preventDefault();
    this.setState({ text: "" });
    this.props.addTodo(this.state.text);
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          onChange={this.onChange}
          style={{ width: "90%", padding: "3px 14px" }}
          name="text"
          placeholder="Add new todo"
          type="text"
        />
        <button style={btn} className="btn" type="submit">
          Add
        </button>
      </form>
    );
  }
}
const btn = {
  width: "10%",
  padding: "5px",
  backgroundColor: "#9c9797",
  color: "#fefefefe",
  border: "none",
  cursor: "pointer",
};
AddTodo.propsType = {
  addTodo: PropsType.func.isRequired,
};
