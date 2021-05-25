import { useReducer, useMemo } from 'react'
import { actionType, reducer, initState } from './reducer'

export const HerosReducer = () => {
  const [heros, setHeros] = useReducer(reducer, initState)

  const dispatch = useMemo(() =>({
    loading: () =>
      setHeros({type: actionType.LOADING}),

    endOfLoading: () =>
      setHeros({type: actionType.END_OF_LOADING}),

    successfulSearsh: heros =>
      setHeros({type: actionType.SUCCESSFUL_SEARCH, payload: {heros}}),

    resetList: () =>
      setHeros({type: actionType.RESET_LIST_OF_HEROS})

  }), [])

  return {heros, dispatch}
}
