import { useState, useContext } from 'react'
import { Card } from 'react-bootstrap'

import { MyTeamContext } from '../../context/MyTeamContext'

import { Buttons } from './Buttons'
import { Table } from '../Table/Table'
import './style.css'



export const HeroCard = ({name, img, powerstats, details, id, alignment}) => {

  const hero = {name, img, powerstats, details, alignment, id}

  const [visible, setVisible] = useState({front: ' fade-in', back: ' fade-out'})
  const {myTeam, dispatch} = useContext(MyTeamContext)

  const handleVisible = () => setVisible(preState =>
    ({front: preState.back, back: preState.front})
  )

  const handleRemove = () => {
    dispatch.removeHero(id)
  }

  const handleAdd = () => {
    const  countAlignment =  myTeam.heros.reduce( (count, myHero) =>
      myHero.alignment === hero.alignment
        ? count + 1 : count , 0
    )
    if(countAlignment < 3) dispatch.addHero(hero)
    else alert('solo se puede hasta 3 del mismo aliniamiento')
  }

  const existIntheTeam = myTeam.heros.some(hero=> hero.id === id)

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
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            existIntheTeam={existIntheTeam}
          />
        </Card.Body>
    </Card>
  )
}
