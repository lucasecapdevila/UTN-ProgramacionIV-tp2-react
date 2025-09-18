import React from 'react'
import { jugadoresArgentina } from '../utils/jugadores'
import { Button, Card } from 'react-bootstrap'

const Main = () => {
  return (
    <main>
      {jugadoresArgentina.map(jugador => (
        <Card key={jugador.numero}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      ))}
    </main>
  )
}

export default Main