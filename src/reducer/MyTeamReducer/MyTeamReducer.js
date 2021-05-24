import { useReducer } from 'react'
import { useEffect } from 'react'
import { reducer, actionType } from './reducer'
import { sortPowerStats } from '../../services/superHeroApi/aux'

const getLocal = () =>
  JSON.parse(localStorage.getItem('myTeam'))

const setLocal = ({heros})=>
  localStorage.setItem('myTeam', JSON.stringify(heros))

const initState = {
  heros: getLocal() || [],
  powerStats: null,
}

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
