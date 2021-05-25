import { useContext } from 'react'
import { useFormik } from 'formik'

import { challengeApi } from '../../config/challengeApi'
import { UserContext } from '../../context/UserContext'

import { validate, initialValues, typeOfMsg } from './validate'
import { useModal } from '../../hooks/useModal'

export const HandleLogin = () => {

  const {session, dispatch} = useContext(UserContext)

  const {modal, setModal} = useModal('Login Error')

  const onSubmit = values => {
    dispatch.loading()

    challengeApi
      .post('', values)
      .then(response => response.data.token)
      .then(token => dispatch.loginSuccess(values.email, token))
      .catch(error => {
        const msg = typeOfMsg[error.message] || 'Error'
        setModal.setMsg(msg)
        setModal.show()
      })
      .then(() =>  dispatch.endOfLoading())
  }

  const formik = useFormik({ initialValues, onSubmit, validate })
  return {formik, modal, setModal, session}
}
