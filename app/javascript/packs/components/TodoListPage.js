import React from 'react'
import { withRouter, NavLink } from "react-router-dom"
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoListPage = () => (
  <div>
    <NavLink to="/new" activeClassName="active">[+ New]</NavLink>
    <VisibleTodoList />
    <Footer />
  </div>
)

export default withRouter(TodoListPage)

