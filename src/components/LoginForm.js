import { Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import axios from 'axios'

const URL = 'http://challenge-react.alkemy.org'

const Input = ({name, placeholder, type, label, onChange, value}) => {
  return(
    <Form.Group controlId={'ctrl' + name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Form.Group>
  )
}




export const LoginForm = () => {

  const handlePost = e => {
    e.preventDefault()
    console.log(formik.values)
    axios.post(URL, formik.values)
      .then(response => console.log(response))
      .catch(error => console.log('error', error))
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    }
  })
  return(
    <div>
      <Form onSubmit={handlePost}>
        <Form.Group>
          <Input
            name='email'
            type='email'
            label='Email: '
            placeholder='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Input
            name='password'
            type='password'
            label='Password: '
            placeholder='password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button
            variant='primary'
            type='submit'
          >
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}
