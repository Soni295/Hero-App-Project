import { HeroCard } from '../HeroCard/HeroCard'
import { MyTeamTable } from '../Table/MyTeamTable'
import { RequestMyHeros } from '../../services/superHeroApi/RequestMyHeros'
import './style.css'

export const HeroTeam = () => {

  const {myTeam} = RequestMyHeros()
  return myTeam.powerStats ? <>
    <MyTeamTable data={myTeam.powerStats} />

    <main className="card-deck">
      {myTeam.heros.map( hero =>
        <HeroCard
          key={hero.id + hero.name}
          {...hero}
        />
      )}
    </main>
  </>
  :
  null
}
