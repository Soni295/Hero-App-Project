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

  const handleImgError = (e) => {
    e.target.src = '/default.png'
  }

  return(
    <Card>
      <Card.Img className='hero-picture' variant="top" src={img} onError={handleImgError}/>
      <Card.ImgOverlay className='blur-text-hero-img'>
        <Card.Title className={'hero-name ' + alignment}>{name}</Card.Title>
      <Table
        data={powerstats}
        containerClass={'hero-stats ' + alignment + visible.front }
      />

      <Table
        data={details}
        containerClass={'details ' + alignment + visible.back }
      />

      </Card.ImgOverlay>


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

/*

*/
