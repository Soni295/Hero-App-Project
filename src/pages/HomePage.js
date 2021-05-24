import { useContext, useEffect } from 'react'
import { MyTeamContext } from '../context/MyTeamContext'

import { HeroTeam } from '../components/HeroTeam/HeroTeam'
import { DefaultMessage } from '../components/DefaultMessage/DefaultMessage'

export const HomePage = () => {
  const {myTeam} = useContext(MyTeamContext)
  const message = 'first, you have to choose your one hero'

  return myTeam.heros.length === 0
    ? <DefaultMessage text={message} />
    : <HeroTeam myTeam={myTeam}/>
}
