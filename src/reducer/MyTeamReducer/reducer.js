export const actionType = {
  ADD_HERO: 'ADD_HERO',
  REMOVE_HERO: 'REMOVE_HERO',
  SET_POWER_STATS: 'SET_POWER_STATS',
}

export const reducer = (state, action) => {
  switch(action.type) {
    case actionType.REMOVE_HERO:
      return {
        ...state,
        heros: state.heros.filter(hero =>
          hero.id !== action.payload.id
        )
      }

    case actionType.ADD_HERO:
      return {...state, heros: [...state.heros, action.payload.hero]}

    case actionType.SET_POWER_STATS:
      return {...state, powerStats: action.payload.powerStats}

    default:
      console.log('error action does not controller, myTeam reducer')
      return {...state}
  }
}
