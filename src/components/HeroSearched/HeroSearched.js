import { HeroContainer } from '../HeroContainer/HeroContainer'
import './style.css'

export const HeroSearched = ({heros}) => {
  return(
    <>
      <div className='search-title'><h2>Choose your heros</h2></div>
      <HeroContainer heros={heros}/>
    </>
  )
}
