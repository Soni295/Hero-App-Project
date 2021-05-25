import { useState } from 'react'

export const useModal = (title='', msg='') => {
  const [modal, dispatch] = useState({state: false, title, msg})

  const setModal = {
    show: () => dispatch(prevState => ({...prevState, state: true})),
    hide: () => dispatch(prevState => ({...prevState, state: false})),
    setTitle: title => dispatch(prevState => ({...prevState, title})),
    setMsg: msg => dispatch(prevState => ({...prevState, msg}))
  }

  return {modal, setModal}
}
