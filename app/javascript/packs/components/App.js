import React from 'react'
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Router, Route, Switch } from "react-router-dom"
import AddTodo from '../containers/AddTodo'
import TodoListPage from './TodoListPage'
import history from '../history'

const App = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={TodoListPage} />
        <Route path="/new" component={AddTodo} />
      </Switch>
    </div>
  </Router>
)

export default App
