import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Add Todo ..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
