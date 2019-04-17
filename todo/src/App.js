import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './Actions/index';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateNewTodo = this.updateNewTodo.bind(this);
  }

  addTodo(event) {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.newTodo,
      complete: false
    });
    this.setState({
      newTodo: ''
    });
  }

  updateNewTodo(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
      <h1>Joe's stuff he has been procrastinating.</h1>
        <form onSubmit={this.addTodo}>
          <input
          placeholder="Lets do some stuff!!!"
          onChange={this.updateNewTodo}  
          value={this.state.newTodo}
          />
        </form>
        <button onClick={this.addTodo}>Add Todo</button>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(App);