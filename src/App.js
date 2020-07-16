import React, { Component } from "react";
import "./App.css";
import Todos from "./Components/Todos";
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import about from "./Components/Pages/About";
import axios from "axios";
class App extends Component {
  state = {
    todos: [],
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => {
        this.setState({
          todos: res.data,
        });
      });
  }
  IsChecked = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  DelTodo = (id) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => {
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
      });
  };
  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users/1/todos", {
        title,
        completed: false,
      })
      .then((res) =>
        this.setState({
          todos: [...this.state.todos, res.data],
        })
      );
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    IsChecked={this.IsChecked}
                    DelTodo={this.DelTodo}
                    todos={this.state.todos}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/About" component={about} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
