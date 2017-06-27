let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const registerTodos = todos => {
  nextTodoId += todos.length;

  return {
    type: 'REGISTER_TODOS',
    todos: todos
  }
}

export const loadTodos = todos => {
  return (dispatch, getState) => {
    dispatch(showLoading());
    setTimeout(() => {
      dispatch(registerTodos(todos))
      dispatch(hideLoading());
    }, 1000);
  }
}

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id: id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const showLoading = () => {
  return {
    type: 'SHOW_LOADING'
  }
}

export const hideLoading = () => {
  return {
    type: 'HIDE_LOADING'
  }
}
