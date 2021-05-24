import { useContext } from 'react'
import { MyTeamContext } from '../context/MyTeamContext'

import { HeroContainer } from '../components/HeroContainer/HeroContainer'
import { MyTeamTable } from '../components/Table/MyTeamTable'
import { DefaultMessage } from '../components/DefaultMessage/DefaultMessage'

export const HomePage = () => {
  const {myTeam} = useContext(MyTeamContext)
  const message = 'first, you have to choose your one hero'

  return myTeam.heros.length === 0
    ? <DefaultMessage text={message} />
    :
    <>
      <MyTeamTable data={myTeam.powerStats} />
      <HeroContainer heros={myTeam.heros}/>
    </>
}
