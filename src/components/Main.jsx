import React from "react";
import { jugadoresArgentina } from "../utils/jugadores";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const Main = () => {
  return (
    <main className="py-5 px-2 px-md-4 px-lg-5 mainPage">
      <h1 className="text-center mb-4">Jugadores de la selección de Argentina - Qatar 2022</h1>
      <Container fluid>
        <Row>
          {jugadoresArgentina.map((jugador) => (
            <Col xs={12} sm={6} md={4} lg={3} key={jugador.numero} className="">
              <Card className="mb-4">
                <Card.Img
                  className="img-fluid border-bottom"
                  variant="top"
                  src={jugador.img}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {jugador.nombre}
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item><span className="fw-bold">Posición:</span> {jugador.posicion.charAt(0).toUpperCase() + jugador.posicion.slice(1)}</ListGroup.Item>
                    <ListGroup.Item><span className="fw-bold">Edad:</span> {jugador.edad} años</ListGroup.Item>
                    <ListGroup.Item><span className="fw-bold">Estatura:</span> {jugador.estatura}</ListGroup.Item>
                    <ListGroup.Item><span className="fw-bold">Peso:</span> {jugador.peso}</ListGroup.Item>
                    <ListGroup.Item><span className="fw-bold">Club:</span> {jugador.club}</ListGroup.Item>
                    <ListGroup.Item><span className="fw-bold">Goles:</span> {jugador.goles}</ListGroup.Item>
                    <ListGroup.Item><span className="fw-bold">Asistencias:</span> {jugador.asistencias}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Main;
