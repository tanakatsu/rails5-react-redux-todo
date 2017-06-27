import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onTodoClick, onDeleteClick, completed, title }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <span onClick={onTodoClick}>
    {title}
    </span>

    <button onClick={onDeleteClick}>Delete</button>
  </li>
)

Todo.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Todo

