import { LoadingIcon } from '../components/LoadingIcon/LoadingIcon'
import { DefaultMessage } from '../components/DefaultMessage/DefaultMessage'

import { RequestHeros } from '../services/superHeroApi/RequestHeros'

import { HeroSearched } from '../components/HeroSearched/HeroSearched'

export const SearchPage = () => {
  const {heros} = RequestHeros()
  const msgEmpty = 'Sorry, do not exist any hero who use this name'

  return heros.loading
    ? <div className='center-windown'><LoadingIcon /></div>
    : <>
      {heros.heros.length !== 0
         ? <HeroSearched heros={heros.heros}/>
         : <DefaultMessage text={msgEmpty}/>
      }
      </>
}
