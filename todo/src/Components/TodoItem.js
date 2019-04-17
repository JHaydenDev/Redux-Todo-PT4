import React, { Component } from './node_modules/react';
import { toggleComplete } from '../Actions/index';
import { connect } from './node_modules/react-redux';

 class TodoItem extends Component {

   toggleComplete(event) {
    this.props.toggleComplete(this.props.index);
  }

   render() {
    return (
      <li>
        <input
          type="checkbox"
          onChange={this.toggleComplete.bind(this)}
          />
        {this.props.todo.value}
      </li>
    );
  }
}

 export default connect(null, { toggleComplete })(TodoItem);