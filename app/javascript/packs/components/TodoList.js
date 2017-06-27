import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    const todos = [{id: 0, text: "hello", completed: false}];
    this.props.loadTodosOnReady(todos);
  }

  render() {
    const todos = this.props.todos;

    return (
      <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onTodoClick={() => this.props.onTodoClick(todo.id)} onDeleteClick={() => this.props.onDeleteClick(todo.id)} />
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
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  loadTodosOnReady: PropTypes.func.isRequired
}

export default TodoList
