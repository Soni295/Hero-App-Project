import { Button, ButtonGroup } from 'react-bootstrap'

export const Buttons = ({handleVisible, handleRemove, handleAdd, existIntheTeam}) => {
  return (
    <ButtonGroup size="lg" className="mb-2  align-items-sm-center ">
      {existIntheTeam ?
        <Button variant="danger" onClick={handleRemove}>
          Delete
        </Button> :
        <Button onClick={handleAdd}>
          Add
        </Button>
      }
      <Button
        variant="dark"
        onClick={handleVisible}
      >
        Details
      </Button>
    </ButtonGroup>
  )
}
