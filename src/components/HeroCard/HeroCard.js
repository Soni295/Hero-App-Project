import { useState } from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { Table } from '../Table/Table'
import './style.css'


export const HeroCard = ({name, img, powerstats, details, alignment}) => {

  const [visible, setVisible] = useState({front: ' fade-in', back: ' fade-out'})

  const handleVisible = () => setVisible(preState => {
    return {front: preState.back, back: preState.front}
  })

  console.log(alignment)
  return(
    <Card>
      <Card.Img className='hero-picture' variant="top" src={img} />
        <Card.ImgOverlay>
          <Card.Title className={'hero-name ' + alignment}>{name}</Card.Title>
        </Card.ImgOverlay>

        <Table
          data={powerstats}
          containerClass={'hero-stats ' + alignment + visible.front }
        />
        <Table
          data={details}
          containerClass={'details ' + alignment + visible.back }
        />


      <Card.Body>
       <ButtonGroup size="lg" className="mb-2  align-items-sm-center ">
          <Button>Add</Button>
          <Button
            variant="dark"
            onClick={handleVisible}
          >
            Details
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  )
}
