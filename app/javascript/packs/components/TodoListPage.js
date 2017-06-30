import React from 'react'
import { withRouter, Link } from "react-router-dom"
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoListPage = () => (
  <div>
    <Link to="/new">[+ New]</Link>
    <VisibleTodoList />
    <Footer />
  </div>
)

export default withRouter(TodoListPage)

