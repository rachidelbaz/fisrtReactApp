import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropsType from "prop-types";
class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          IsChecked={this.props.IsChecked}
          DelTodo={this.props.DelTodo}
          todo={todo}
        />
      );
    });
  }
}
Todos.propsType = {
  todos: PropsType.array.isRequired,
  IsChecked: PropsType.func.isRequired,
  DelTodo: PropsType.func.isRequired,
};
export default Todos;
