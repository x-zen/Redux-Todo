import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo} from '../actions';
import './Todo.css';

class TodoList extends React.Component {
  state = {
    newTodo: ''
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  toggleTodo = id => {
    this.props.toggleMember(id);
  };

  render() {
    return (
      <>
        <div class='todo-list'>
          {this.props.todos.map(todo => (
            <h3 key={todo.id}
              onClick={() => this.toggleTodo(todo.id)}
              class='list-item'
            >
            </h3>
          ))}
        </div>
        <input
          type='text'
          name='newTodo'
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder='Add new ask...'
        />
        <button onClick={this.addTodo}>Add Task!</button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todos
});

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(TodoList);
