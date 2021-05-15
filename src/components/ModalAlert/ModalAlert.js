import { Modal as ModalBS, Button } from 'react-bootstrap'

export const ModalAlert = ({modalShow, setModalShow}) => {

  return (
    <ModalBS
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow}
      onHide={() => setModalShow(false)}
    >
      <ModalBS.Header>
        <ModalBS.Title id="contained-modal-title-vcenter">
          Login Error
        </ModalBS.Title>
      </ModalBS.Header>
      <ModalBS.Body>
        <p>
          Your email or password is wrong try again
        </p>
      </ModalBS.Body>
      <ModalBS.Footer>
        <Button onClick={() => setModalShow(false)}>Close</Button>
      </ModalBS.Footer>
    </ModalBS>
  )
}
