import { useState, useCallback } from 'react'
import { Card } from 'react-bootstrap'

import { Buttons } from './Buttons'
import { Table } from '../Table/Table'
import './style.css'

export const HeroCard = ({name, img, powerstats, details, id, alignment}) => {

  const hero = {name, img, powerstats, details, alignment, id}

  const [visible, setVisible] = useState({front: ' fade-in', back: ' fade-out'})

  const handleVisible = useCallback(() => setVisible(preState =>
    ({front: preState.back, back: preState.front})
  ), [setVisible])

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
        <Buttons
          handleVisible={handleVisible}
          id={id}
          alignment={alignment}
          hero={hero}
        />
      </Card.Body>
    </Card>
  )
}
