let nextTodoId = 0

export const ADD_TODO = 'ADD_TODO';
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  payload: text
})

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  payload: id
})

export const UPDATE_TITLE = 'UPDATE_TITLE';
export function updateTitle(newTitle) {
  return {
    type: 'UPDATE_TITLE',
    payload: newTitle
  }
}
