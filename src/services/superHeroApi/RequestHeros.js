import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { superHeroApi } from '../../config/superHeroApi'
import { setDataHero } from './aux'
import { HerosReducer } from '../../reducer/HerosReducer/HerosReducer'

export const RequestHeros = () => {

  const {heros, dispatch} = HerosReducer()

  const { name } = useParams()
  useEffect(() => {
    dispatch.resetList()
    dispatch.loading()
    superHeroApi
      .get(`/search/${name}`)
      .then(res => res.data.results)
      .then(data => data.map(hero => setDataHero(hero)))
      .then(arrHeros => dispatch.successfulSearsh(arrHeros))
      .catch(err => console.log(err))
      .then(() => dispatch.endOfLoading())
  }, [name ])

  return {heros}
}
