import { useReducer, useEffect } from 'react'
import { reducer, actionType, initState } from './reducer'

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

  useEffect( ()=>{
    if(session.token) localStorage.setItem('token', session.token)
  }, [session.token])

  return {session, dispatch}
}
