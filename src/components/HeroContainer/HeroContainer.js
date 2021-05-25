import { HeroCard } from '../HeroCard/HeroCard'
import './style.css'

export const HeroContainer = ({heros}) =>(
  <main className="card-deck">
    {heros.map( hero =>
      <HeroCard
        key={hero.name + hero.id}
        {...hero}
      />
    )}
  </main>
)
