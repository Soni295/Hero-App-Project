import { useContext } from 'react'

import { HeroCard } from '../HeroCard/HeroCard'
import { MyTeamTable } from '../Table/MyTeamTable'
import { LoadingIcon } from '../LoadingIcon/LoadingIcon'

import { MyTeamContext } from '../../context/MyTeamContext'
import './style.css'

export const HeroTeam = () => {

  const {myTeam} = useContext(MyTeamContext)

  return myTeam.loading ?
    <section className='loading-spin'>
      <LoadingIcon />
    </section>
    :
    <>
      {myTeam.powerStats && <MyTeamTable data={myTeam.powerStats} /> }
      <main className="card-deck">
        {myTeam.heros.map( hero =>
          <HeroCard
            key={hero.name + hero.id}
            {...hero}
          />
        )}
      </main>
    </>
}
