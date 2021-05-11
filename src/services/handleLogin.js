import { useFormik } from 'formik'
import axios from 'axios'

const URL = 'http://challenge-react.alkemy.org'

export const HandleLogin = () => {

  const initialValues = {
    email: '',
    password: ''
  }

  const onSubmit = values => {
    axios.post(URL, values)
      .then(response => console.log(response))
      .catch(error => console.log('error', error))
  }
  const validate = values => {
    const errors = {}
    const checkEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    if(!values.email)
      errors.email = 'Required'

    else if (!checkEmail.test(values.email))
      errors.email = 'Invalid email address'

    if(!values.password)
      errors.password = 'Required'

    else if(values.password.length > 4)
      errors.password = 'password cannot be less than 5 characters '

    return errors
  }

  const formik = useFormik({
    initialValues, onSubmit, validate
  })

  return formik
}
