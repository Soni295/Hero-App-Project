import { HeroCard } from '../HeroCard/HeroCard'
import { RequestMyHeros } from '../../services/superHeroApi/RequestMyHeros'

export const HeroTeam = () => {

  const {heros} = RequestMyHeros()

  return (
    <div>
      {heros.map( hero =>
        <HeroCard
          key={hero.id + hero.name}
          {...hero}
        />
      )}
    </div>
  )
}
