import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import p1 from '../assets/img/1.png'
import p2 from '../assets/img/2.png'
import p3 from '../assets/img/3.png'
import p4 from '../assets/img/4.png'

function Pilares() {
  return (
    <Container className="container-section">
         <Row className="row-container">
             <Col className="container-col">
                 <div className="img-col">
                    <img src={p1} alt="Cloud y DevOps" />
                 </div>
                 <h3>MEJORES PUNTOS DE INTERES</h3>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum in deleniti tempore esse neque tempora, culpa modi ipsa impedit, facere.</p>
             </Col>
             <Col className="container-col">
                <div className="img-col">
                    <img src={p2} alt="Desarrollo de software" />
                 </div>
                <h3>EXPERIENCIA Y SEGURIDAD</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum in deleniti tempore esse neque tempora, culpa modi ipsa impedit, facere.</p>
            </Col>
            <Col className="container-col">
                <div className="img-col">
                    <img src={p3} alt="Calidad de software" />
                 </div>
                <h3>SEGURO DE VIAJE</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum in deleniti tempore esse neque tempora, culpa modi ipsa impedit, facere.</p>
            </Col>
            <Col className="container-col">
                <div className="img-col">
                    <img src={p4} alt="Capacitaciones" />
                 </div>
                <h3>EQUIPO PROFESIONAL</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum in deleniti tempore esse neque tempora, culpa modi ipsa impedit, facere.</p>
            </Col>
         </Row>
     </Container>
  )
}

export default Pilares