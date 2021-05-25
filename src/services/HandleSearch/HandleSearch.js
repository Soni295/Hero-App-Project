import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import { initialValues, validate } from './validate'

export const HandleSearch = () => {
  const history = useHistory()

  const onSubmit = values => history.push(`/search/${values.search}`)

  const formik = useFormik({ initialValues, onSubmit, validate })

  return {formik}
}
