import { RequestSearchedHeros } from '../../services/superHeroApi/RequestSearchedHeros'
import { HeroCard } from '../HeroCard/HeroCard'
import './style.css'

export const MainHeros = () => {
  const {heros} = RequestSearchedHeros()

  return (
    <main className='main-heros'>
      {heros.map( hero =>
        <HeroCard
          key={hero.name + hero.id}
          {...hero}
        />
      )}
    </main>
  )
}
