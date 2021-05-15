import { Card, Button } from 'react-bootstrap'

export const HeroDetails = (
  {weight, height, fullName, aliases, eyeColor, hairColor, workspace}) => {

  return(
    <div>
      <p>{weight}</p>
      <p>{height}</p>
      <p>{fullName}</p>
      <p>{aliases}</p>
      <p>{eyeColor}</p>
      <p>{hairColor}</p>
      <p>{workspace}</p>
    </div>
  )
}


export const HeroCard = ({name, img, powerstats, details}) => {

  const Liststats = ({powerstats}) => {
    const {intelligence, strength, speed, durability, power} = powerstats
    return(
      <>
        <p>Intelligence: {intelligence} </p>
        <p>Strength: {strength} </p>
        <p>Speed: {speed} </p>
        <p>Durability: {durability} </p>
        <p>Power: {power} </p>
      </>
    )
  }

  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
        <Card.ImgOverlay>
          <Card.Title>{name}</Card.Title>
        </Card.ImgOverlay>
      <Card.Body>
          <Liststats powerstats={powerstats}/>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
