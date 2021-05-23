import React, { createContext } from 'react'
import { UserReducer } from '../reducer/UserReducer/UserReducer'

export const UserContext = createContext()

export const UserProvider = ({children}) => {

  const {session, dispatch} = UserReducer()

  return(
    <UserContext.Provider value={{session, dispatch}}>
      {children}
    </UserContext.Provider>
  )
}
