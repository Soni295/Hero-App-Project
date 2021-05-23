import { useReducer } from 'react'
import { actionType, reducer } from './reducer'

const initState = {
  user: '',
  token: localStorage.getItem('token') || null,
  loading: false
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
