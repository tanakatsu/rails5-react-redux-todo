import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import loading from './loading'
import routing from './routing'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  loading,
  routing
})

export default todoApp

