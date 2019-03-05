import {ADD_TODO, TOGGLE_TODO, UPDATE_TITLE} from '../actions';

const initiaState = {
  title: 'Dev Day Plan',
  todos: [
    {
      id:999,
      text: 'Sleep',
      completed: true
    },
    {
      id: 998,
      text: 'Code',
      completed: false
    },
    {
      id: 997,
      text: 'Repeat',
      completed: true
    }
  ]
};

function reducer(state = initiaState, action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };

    case 'ADD_TODO':
      const newTodo = {
        id: action.id,
        text: action.text,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default reducer;
