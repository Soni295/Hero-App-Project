export const initialValues = { search: '' }

export const validate = values => {
  const errors = {}

  if(!values.search) errors.search = 'Required'

  return errors
}
