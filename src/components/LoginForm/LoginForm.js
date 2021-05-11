import { Form, Button } from 'react-bootstrap'
import { HandleLogin } from '../../services/handleLogin'
import { Input } from '../FormInput/FormInput'

export const LoginForm = () => {
  const  formik = HandleLogin()
  return(
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          name='email'
          type='email'
          placeholder='JohnDoe@gmail.com'
          control={formik}
        />
        <Input
          name='password'
          type='password'
          placeholder='********'
          control={formik}
        />
        <Button
          variant='primary'
          type='submit'
        >
          Enviar
        </Button>
      </Form>
    </div>
  )
}
