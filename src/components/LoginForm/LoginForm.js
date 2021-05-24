import { Form, Button } from 'react-bootstrap'
import { HandleLogin } from '../../services/handleLogin/handleLogin'

import { LoadingIcon } from '../LoadingIcon/LoadingIcon'
import { Input } from '../FormInput/FormInput'
import { ModalAlert } from '../ModalAlert/ModalAlert'

import './style.css'

export const LoginForm = () => {
  const {
    formik, session,
    modalShow, setModalShow
  } = HandleLogin()

  return (
    <div className='form-login' >
      <h2>
        Login
      </h2>

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

        { session.loading
          ? <div className='loading'><LoadingIcon /></div>
          : <Button variant='primary' type='submit'>
             Send
            </Button>
        }
        <ModalAlert
          modalShow={modalShow}
          setModalShow={setModalShow}
        />
      </Form>
    </div>
  )
}
