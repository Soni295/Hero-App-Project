import { LoginForm } from '../components/LoginForm/LoginForm'
import { Container, Row, Col } from 'react-bootstrap'

export const LoginPage = () => {
  return (
    <Container fluid className='full-window'>
      <Row className="justify-content-md-center full-h  align-items-center">
        <Col
          xs={11}
          sm={8}
          md={5}
          lg={4}
          xl={3}
          className="mx-auto">
          <LoginForm/>
        </Col>
      </Row>
    </Container>
  )
}
