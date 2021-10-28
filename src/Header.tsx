import React from 'react';
import './Header.css';
import PJ from './PJ_photo.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const data = require('./content/HeaderData');

function Header() {
    return (
        <Container>
            <Image src={ PJ } className="photo" roundedCircle/>
            <h1> { data.name } </h1>
            <h3> { data.title } </h3>
            <Row>
                <Col> <a href = { "mailto: " + data.email } > Email </a> </Col>
                <Col> <a href = { data.github } >  GitHub </a> </Col>
                <Col> <a href = { data.linkedin } > LinkedIn </a> </Col>
            </Row>
        </Container>
    );
}

export default Header;