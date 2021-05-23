import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { superHeroApi } from '../../config/superHeroApi'
import { setDataHero } from './aux'

export const RequestSearchedHeros = () => {
  const [heros, setHeros] = useState([])
  const { name } = useParams()

  useEffect(() => {
    superHeroApi
      .get(`/search/${name}`)
      .then(res => res.data.results)
      .then(data => data.map(hero => setDataHero(hero)))
      .then(arrHeros => setHeros(arrHeros))
      .catch(err => console.log(err))
  }, [name])

  return{heros}
}
