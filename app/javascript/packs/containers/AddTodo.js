import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// React component using ES6 class definition
// https://facebook.github.io/react/docs/state-and-lifecycle.html
class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    // console.log(props);
  }

  render() {
    let input

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            this.props.dispatch(addTodo(input.value))
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps)(AddTodo)
