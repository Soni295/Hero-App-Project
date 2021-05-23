import { useReducer } from 'react'
import { reducer, actionType } from './reducer'

const initState = {
  herosId: ['4', '01', '02', '3', '5', '10'],
  heros: [],
  powerStats: null,
  loading: false
}

export const MyTeamReducer = () => {
  const [myTeam, setMyTeam] = useReducer(reducer, initState)

  const dispatch = {
    loading: () =>
      setMyTeam({type: actionType.LOADING}),

    load: () =>
      setMyTeam({type: actionType.LOAD}),

    getAllSuccess: heros =>
      setMyTeam({type: actionType.GET_ALL_TEAM_SUCCESS, payload: {heros}}),

    setTeamPowerStats: powerStats =>
      setMyTeam({type: actionType.SET_POWER_STATS, payload: {powerStats}}),

    removeHero: id =>
      setMyTeam({type: actionType.REMOVE_HERO, payload: {id}})
  }
  return [myTeam, dispatch]
}
