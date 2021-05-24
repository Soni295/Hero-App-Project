export const initState = {
  heros: [],
  loading: false
}

export const actionType = {
  LOADING: 'LOADING',
  END_OF_LOADING: 'LOADING_OF_LOADING',
  SUCCESSFUL_SEARCH: 'SUCCESSFUL_SEARCH',
  RESET_LIST_OF_HEROS:  'RESET_LIST_OF_HEROS'
}

export const reducer = (state, action) => {
  switch(action.type){
    case actionType.LOADING:
      return {...state, loading: true}
    case actionType.END_OF_LOADING:
      return {...state, loading: false}
    case actionType.SUCCESSFUL_SEARCH:
      return {...state, heros: action.payload.heros}
    case actionType.RESET_LIST_OF_HEROS:
      return {...initState}
    default:
      console.log('type do not declared for HerosReducer')
      return {...state}
  }
}
