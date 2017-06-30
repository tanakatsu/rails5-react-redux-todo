const routing = (state = {}, action) => {
  switch (action.type) {
    case 'SET_REDIRECT':
      return { redirect_to: action.path }
    case 'UNSET_REDIRECT':
      return { redirect_to: null }
    default:
      return state
  }
}

export default routing
