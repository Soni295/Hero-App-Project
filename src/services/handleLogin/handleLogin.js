import { useContext, useState } from 'react'
import { useFormik } from 'formik'

import { challengeApi } from '../../config/challengeApi'

import { UserContext } from '../../context/UserContext'
import { validate, initialValues, typeOfMsg } from './validate'

export const HandleLogin = () => {

  const [modalShow, setModalShow] = useState({state: false, title: '', msg: ''})
  const {session, dispatch} = useContext(UserContext)

  const onSubmit = values => {
    dispatch.loading()

    challengeApi
      .post('', values)
      .then(response => response.data.token)
      .then(token => dispatch.loginSuccess(values.email, token))
      .catch(error => {
        const msg = typeOfMsg[error.message] || 'Error'

        setModalShow(prevState => ({
          prevState, state: true, title: 'Login Error', msg
        }))
      })
      .then(() =>  dispatch.endOfLoading())
  }

  const formik = useFormik({ initialValues, onSubmit, validate })
  return {formik, modalShow, setModalShow, session}
}
