import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onTodoClick, onDeleteClick, completed, text }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <span onClick={onTodoClick}>
    {text}
    </span>

    <button onClick={onDeleteClick}>Delete</button>
  </li>
)

Todo.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

