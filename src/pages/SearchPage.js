import { HeroContainer } from '../components/HeroContainer/HeroContainer'
import { LoadingIcon } from '../components/LoadingIcon/LoadingIcon'
import { DefaultMessage } from '../components/DefaultMessage/DefaultMessage'

import { RequestHeros } from '../services/superHeroApi/RequestHeros'

export const SearchPage = () => {
  const {heros} = RequestHeros()
  const msgEmpty = 'Sorry, do not exist anybody hero who used this name'

  return heros.loading
    ? <LoadingIcon />
    : <>
      {heros.heros.length !== 0
         ? <HeroContainer heros={heros.heros}/>
         : <DefaultMessage text={msgEmpty}/>
      }
      </>
}
