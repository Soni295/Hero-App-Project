import { useContext, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'

import { UserContext } from '../../context/UserContext'
import { validate } from './validate'

const initialValues = { email: '', password: '' }

const URL = 'http://challenge-react.alkemy.org'

export const HandleLogin = () => {

  const [modalShow, setModalShow] = useState(false)
  const {session, dispatch} = useContext(UserContext)

  const onSubmit = values => {
    dispatch.loading()
    axios
      .post(URL, values)
      .then(response => {
        if(response.status === 200) return response.data.token
      })
      .then(token => {
        dispatch.loginSuccess(values.email, token)
      })
      .catch(error => {
        console.log(error)
        setModalShow(true)
        dispatch.loginError()
      }).finally(() => {
        dispatch.endOfLoading()
      })
  }

  const formik = useFormik({ initialValues, onSubmit, validate })

  return {formik, modalShow, setModalShow, session}
}
