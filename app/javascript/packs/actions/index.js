let nextTodoId = 0
export const addTodo = title => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    title
  }
}

export const registerTodos = todos => {
  nextTodoId += todos.length;

  return {
    type: 'REGISTER_TODOS',
    todos: todos
  }
}

export const loadTodos = () => {
  return (dispatch, getState) => {
    dispatch(showLoading());
    fetch('/api/todos')
    .then(response => {
      // https://developer.mozilla.org/en-US/docs/Web/API/Body
      return response.json()
    })
    .then(data => {
      // console.log(data);
      dispatch(registerTodos(data))
      dispatch(hideLoading());
    })
    .catch(err => {
      console.error(err);
      dispatch(hideLoading());
    })
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
