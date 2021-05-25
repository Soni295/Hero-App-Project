import { Modal as ModalBS, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom'

export const ModalAlert = ({modal, setModal}) => {

  return ReactDOM.createPortal(
    <ModalBS
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modal.state}
      onHide={setModal.hide}
    >
      <ModalBS.Header>
        <ModalBS.Title id="contained-modal-title-vcenter">
          {modal.title}
        </ModalBS.Title>
      </ModalBS.Header>
      <ModalBS.Body>
        <p>
          {modal.msg}
        </p>
      </ModalBS.Body>
      <ModalBS.Footer>
        <Button onClick={setModal.hide}>Close</Button>
      </ModalBS.Footer>
    </ModalBS>,
    document.getElementById('modal')
  )
}
