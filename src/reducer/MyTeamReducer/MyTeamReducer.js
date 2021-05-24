import { useReducer, useEffect } from 'react'
import { reducer, actionType, initState } from './reducer'
import { sortPowerStats } from '../../services/superHeroApi/aux'

const setLocal = (team)=>
  localStorage.setItem('myTeam', JSON.stringify(team))

export const MyTeamReducer = () => {
  const [myTeam, setMyTeam] = useReducer(reducer, initState)

  const dispatch = {
    setTeamPowerStats: powerStats =>
      setMyTeam({type: actionType.SET_POWER_STATS, payload: {powerStats}}),
    addHero: hero =>
      setMyTeam({type: actionType.ADD_HERO, payload: {hero}}),
    removeHero: id =>
      setMyTeam({type: actionType.REMOVE_HERO, payload: {id}})
  }

  useEffect(() => {
    dispatch.setTeamPowerStats(sortPowerStats(myTeam.heros))
    setLocal(myTeam)
  }, [myTeam.heros])

  return {myTeam, dispatch}
}
