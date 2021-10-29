import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Job.css';

function Job(props: any) {
    return (
        <Row className="jobCard">
            <Row>
                <Col>
                    <h4> { props.company } </h4>
                </Col>
                <Col>
                    <h4 className="jobTitle"> { props.title } </h4>
                </Col>
            </Row>
            <Row>
                <h5> { props.date } </h5>
            </Row>
            {props.description.map((x: string) => {
                return (
                    <Row>
                        <p>{ x }</p>
                    </Row>
                )
            })}
        </Row>
    )
}

export default Job;