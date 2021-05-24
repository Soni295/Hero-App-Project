import { HeroCard } from '../HeroCard/HeroCard'
import { MyTeamTable } from '../Table/MyTeamTable'
import './style.css'

export const HeroTeam = ({myTeam}) =>(
  <>
    <MyTeamTable data={myTeam.powerStats} />
    <main className="card-deck">
      {myTeam.heros.map( hero =>
        <HeroCard
          key={hero.name + hero.id}
          {...hero}
        />
      )}
    </main>
  </>
)
