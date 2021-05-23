export const actionType = {
  LOADING: 'LOADING',
  LOAD: 'LOAD',
  GET_ALL_TEAM_SUCCESS: 'GET_ALL_TEAM_SUCCESS',
  SET_POWER_STATS: 'SET_POWER_STATS',
  REMOVE_HERO: 'REMOVE_HERO'
}

export const reducer = (state, action) => {
  switch(action.type) {
    case actionType.LOADING:
      return {...state, loading: true}

    case actionType.REMOVE_HERO:
      const {id} = action.payload
      return {
        ...state,
        herosId: state.herosId.filter(heroId => heroId !== id),
        heros: state.heros.filter(hero => hero.id !== id)
      }

    case actionType.LOAD:
      return {...state, loading: false}

    case actionType.GET_ALL_TEAM_SUCCESS:
      return {...state, heros: action.payload.heros}

    case actionType.SET_POWER_STATS:
      return {...state, powerStats: action.payload.powerStats}

    default:
      console.log('error action does not controller, myTeam reducer')
      return {...state}
  }
}
