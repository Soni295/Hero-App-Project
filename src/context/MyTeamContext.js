import React, { createContext } from 'react'
import { MyTeamReducer } from '../reducer/MyTeamReducer/MyTeamReducer'

export const MyTeamContext = createContext()

export const MyTeamProvider = ({children}) => {

  const {myTeam, dispatch} = MyTeamReducer()

  return(
    <MyTeamContext.Provider value={{myTeam, dispatch}}>
      {children}
    </MyTeamContext.Provider>
  )
}
