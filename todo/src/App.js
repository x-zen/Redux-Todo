import React, { Component } from 'react';
import './App.css';
import './comp/Todo.css';
import Title from './comp/Title.js';
import TodoList from './comp/TodoList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <TodoList />
      </div>
    );
  }
}

export default App;
