import React from 'react';
import './style/Header.css';
import PJ from './content/PJ_photo.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pdf from './content/resume.pdf';
const data: HeaderData = require('./content/HeaderData');

type HeaderData = {
    name: string;
    title: string;
    email: string;
    github: string;
    linkedin: string;
}

function Header() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <Image src={ PJ } className="photo" />
                </Col>
                <Col xs="auto">
                    <Row>
                        <h1> { data.name } </h1>
                        <h3> { data.title } </h3>
                    </Row>
                    <Row>
                        <Col xs="auto"> <a className='headerLink' href = { `mailto: ${data.email}` } > Email </a> </Col>
                        <Col xs="auto"> <a className='headerLink' href = { data.github } >  GitHub </a> </Col>
                        <Col xs="auto"> <a className='headerLink' href = { data.linkedin } > LinkedIn </a> </Col>
                        <Col xs="auto"> <a className='headerLink' href = { pdf } download='resume.pdf'> Resume </a></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;