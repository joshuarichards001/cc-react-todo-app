import React, { Component } from "react";
import Todo from "./Todo";

export default class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        complete={this.props.complete}
        delete={this.props.delete}
      />
    ));
  }
}
