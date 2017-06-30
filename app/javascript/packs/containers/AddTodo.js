import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link, Redirect } from "react-router-dom"
import { createTodoAsync, unsetRedirect } from '../actions'
import history from '../history'

// React component using ES6 class definition
// https://facebook.github.io/react/docs/state-and-lifecycle.html
class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    // console.log(props);
  }

  componentWillUnmount() {
    // this.props.dispatch(unsetRedirect()); // Reset redirect
  }

  render() {
    let input

    return (
      <div>
        {/* this.props.routing && this.props.routing.redirect_to ? <Redirect to={this.props.routing.redirect_to} /> : null */}
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            this.props.dispatch(createTodoAsync(input.value))
            input.value = ''
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
          <button type="submit" disabled={this.props.loading}>
            Add Todo
          </button>
        </form>
        <Link to="/">[Back]</Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    routing: state.routing
  }
}

export default withRouter(connect(mapStateToProps)(AddTodo))
