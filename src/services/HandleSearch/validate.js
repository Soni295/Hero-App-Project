export const initialValues = { search: '' }

export const validate = values => {
  const errors = {}
  if(!values.search) errors.search = 'Type hero fisrt'

  return errors
}
