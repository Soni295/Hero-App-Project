import { useReducer } from 'react'

const initState = {
  user: '',
  token: localStorage.getItem('token') || null,
  loading: false
}

export const actionType = {
  LOADING: 'LOADING',
  END_OF_LOADING: 'LOADING_OF_LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
}

export const reducer = (state, action) => {

  switch(action.type) {
    case actionType.LOADING:
      return {...state, loading: true}
    case actionType.LOGIN_SUCCESS:
      const { user, token } = action.payload
      localStorage.setItem('token', token)
      return {...state, user, token }
    case actionType.LOGIN_ERROR:
      return {...state}
    case actionType.END_OF_LOADING:
      return {...state, loading: false}
    //case actionType.LOGOUT_SUCCESS:
    default:
      console.log('error')
      return {...state}
  }
}

export const UserReducer = () => {
  const [session, setSession] = useReducer(reducer, initState)

  const dispatch = {
    loading: () => setSession(
      {type: actionType.LOADING}),
    loginSuccess: (user, token) => setSession(
      {type: actionType.LOGIN_SUCCESS, payload: {user, token} }),
    loginError : () =>
      setSession({type: actionType.LOGIN_ERROR}),
    endOfLoading: () =>
      setSession({type: actionType.END_OF_LOADING})
  }

  return {session, dispatch}
}


