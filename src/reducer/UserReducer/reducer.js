export const actionType = {
  LOADING: 'LOADING',
  END_OF_LOADING: 'LOADING_OF_LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
}

export const reducer = (state, action) => {
  switch(action.type) {
    case actionType.LOADING:
      return {...state, loading: true}
    case actionType.LOGIN_SUCCESS:
      return {...state, user: action.payload.user, token: action.payload.token }
    case actionType.END_OF_LOADING:
      return {...state, loading: false}
    //case actionType.LOGOUT_SUCCESS:
    default:
      console.log('error')
      return {...state}
  }
}
