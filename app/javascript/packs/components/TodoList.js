import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  componentWillMount() {
    this.props.actions.loadTodosAsync()
  }

  render() {
    const todos = this.props.todos;

    return (
      <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onTodoClick={() => this.props.actions.toggleTodoAsync(todo.id)} onDeleteClick={() => this.props.actions.deleteTodoAsync(todo.id)} />
      ))}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default TodoList
