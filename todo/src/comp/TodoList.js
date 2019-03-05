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
    this.props.toggleTodo(id);
  };

  render() {
    return (
      <>
        <div className='todo-list'>
          {this.props.todoList.map(todo => (
            <h4 key={todo.id}
              onClick={() => this.toggleTodo(todo.id)}
              className='list-item'
            >
            {todo.text}
            {todo.completed && <i className="fas fa-check-circle" />}
            </h4>
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
