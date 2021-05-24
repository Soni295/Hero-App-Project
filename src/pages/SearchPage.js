import { HeroContainer } from '../components/HeroContainer/HeroContainer'
import { RequestSearchedHeros } from '../services/superHeroApi/RequestSearchedHeros'

export const SearchPage = () => {
  const {heros} = RequestSearchedHeros()

  return <HeroContainer heros={heros}/>
}
