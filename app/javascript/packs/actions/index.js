import history from '../history'

export const addTodo = (id, title) => {
  return {
    type: 'ADD_TODO',
    id,
    title
  }
}

export const createTodoAsync = title => {
  return (dispatch, getState) => {
    const _todo = { title: title, completed: false }

    dispatch(showLoading());

    fetch('/api/todos', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(_todo) })
    .then(response => {
      // console.log(response)
      return response.json()
    })
    .then(data => {
      // console.log(data);
      dispatch(addTodo(data.id, data.title));
      dispatch(hideLoading());

      // redirect
      history.push('/') // This won't work with BrowserRouter
      // dispatch(setRedirect('/')) // You have to change state to redirect with BrowserRouter
    })
    .catch(err => {
      console.error(err);
      dispatch(hideLoading());
    })
  }
}

export const registerTodos = todos => {
  return {
    type: 'REGISTER_TODOS',
    todos: todos
  }
}

export const loadTodosAsync = () => {
  return (dispatch, getState) => {
    dispatch(showLoading());
    fetch('/api/todos')
    .then(response => {
      // console.log(response)
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

export const deleteTodoAsync = id => {
  return (dispatch, getState) => {
    dispatch(showLoading());

    fetch(`/api/todos/${id}`, {
         method: 'DELETE',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         } })
    .then(response => {
      // console.log(response)
      dispatch(hideLoading());
      if (response.ok) {
        dispatch(deleteTodo(id));
      }
    })
    .catch(err => {
      console.error(err);
      dispatch(hideLoading());
    })
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

export const toggleTodoAsync = (id) => {
  return (dispatch, getState) => {
    const todos = getState().todos
    let todo = todos.find((elm) => {
      return elm.id == id
    })

    let _todo = Object.assign({}, todo) // Don't change state
    _todo.completed = !_todo.completed
    dispatch(showLoading());

    fetch(`/api/todos/${_todo.id}`, {
         method: 'PUT',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(_todo) })
    .then(response => {
      // console.log(response)
      return response.json()
    })
    .then(data => {
      // console.log(data);
      dispatch(toggleTodo(data.id));
      dispatch(hideLoading());
    })
    .catch(err => {
      console.error(err);
      dispatch(hideLoading());
    })
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

export const setRedirect = (path) => {
  return {
    type: 'SET_REDIRECT',
    path: path
  }
}

export const unsetRedirect = () => {
  return {
    type: 'UNSET_REDIRECT'
  }
}
