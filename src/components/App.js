import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { v4 as uuid } from "uuid";

export default class App extends Component {
  state = {
    todos: [],
  };

  complete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      }),
    });
  };

  delete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          complete={this.complete}
          delete={this.delete}
        />
      </div>
    );
  }
}
