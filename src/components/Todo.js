import React, { Component } from "react";

export default class Todo extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          defaultChecked={this.props.todo.completed}
          onChange={this.props.complete.bind(this, this.props.todo.id)}
        />
        {this.props.todo.title}
        <button onClick={this.props.delete.bind(this, this.props.todo.id)}>
          x
        </button>
      </div>
    );
  }
}
