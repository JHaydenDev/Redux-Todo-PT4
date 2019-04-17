    
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './Actions/TodoActions';
import TodoList from './Components/TodoList';

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
        <form onSubmit={this.addTodo}>
          <input
          placeholder="new"
          onChange={this.updateNewTodo}  
          value={this.state.newTodo}
          />
        </form>
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