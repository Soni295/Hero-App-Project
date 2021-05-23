import { useEffect } from 'react'
import { MyTeamReducer } from '../../reducer/MyTeamReducer/MyTeamReducer'
import { superHeroApi } from '../../config/superHeroApi'
import { setDataHero, sortPowerStats } from './aux'
import axios from 'axios'

export const RequestMyHeros = () => {
  const [myTeam, dispatch] = MyTeamReducer()

  useEffect(() => {
    const requests = myTeam.herosId.map( id => superHeroApi.get(id))
    dispatch.loading()

    axios
      .all(requests)
      .then(responses => responses.map(({data}) => setDataHero(data)))
      .then(data => {
        dispatch.getAllSuccess(data)
        dispatch.setTeamPowerStats(sortPowerStats(data))
      })
      .catch(err => console.log(err))
      .then(() => dispatch.load())
  }, [])

  return{myTeam}
}
