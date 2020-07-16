import React, { Component } from "react";
import PropsType from "prop-types";

class TodoItem extends Component {
  setStyle = () => {
    return {
      border: "1px dotted blue",
      padding: "1px",
      margin: "2px",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      display: "flex",
      justifyContent: "space-between",
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.setStyle()}>
        <h3>
          <input
            type="checkbox"
            onChange={this.props.IsChecked.bind(this, id)}
          />{" "}
          {title}
        </h3>
        <div>
          <button style={btnStyle} onClick={this.props.DelTodo.bind(this, id)}>
            X
          </button>
        </div>
      </div>
    );
  }
}

const btnStyle = {
  color: "white",
  borderRadius: "40%",
  padding: "7px 7px",
  backgroundColor: "red",
  border: "none",
  fontSize: "10px",
  cursor: "pointer",
  float: "right",
};
TodoItem.propsType = {
  todo: PropsType.object.isRequired,
  IsChecked: PropsType.func.isRequired,
  DelTodo: PropsType.func.isRequired,
};
export default TodoItem;
