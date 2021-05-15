export const validate = values => {
  const errors = {}
  const checkEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  if(!values.email)
    errors.email = 'Required'

  else if (!checkEmail.test(values.email))
    errors.email = 'Invalid email address'

  if(!values.password)
    errors.password = 'Required'

  else if(values.password.length < 5)
    errors.password = 'password cannot be less than 5 characters '

  return errors
}
