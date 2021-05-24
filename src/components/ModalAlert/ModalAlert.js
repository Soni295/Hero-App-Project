import { Modal as ModalBS, Button } from 'react-bootstrap'

export const ModalAlert = ({modalShow, setModalShow}) => {

  const handleHideModal = () => {
    setModalShow(preState => ({...preState, state: false}))
  }
  return(
    <ModalBS
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow.state}
      onHide={handleHideModal}
    >
      <ModalBS.Header>
        <ModalBS.Title id="contained-modal-title-vcenter">
          {modalShow.title}
        </ModalBS.Title>
      </ModalBS.Header>
      <ModalBS.Body>
        <p>
          {modalShow.msg}
        </p>
      </ModalBS.Body>
      <ModalBS.Footer>
        <Button onClick={handleHideModal}>Close</Button>
      </ModalBS.Footer>
    </ModalBS>
  )
}
