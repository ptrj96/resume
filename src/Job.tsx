import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Job(props: any) {
    return (
        <Row className="jobCard">
            <Row>
                <Col>
                    <h4> { props.company } </h4>
                </Col>
                <Col>
                    <h4> { props.title } </h4>
                </Col>
            </Row>
            <Row>
                <h5> { props.date } </h5>
            </Row>
            <ul>
                {props.description.map((x: string) => {
                    return (
                        <li>
                            { x }
                        </li>
                    )
                })}
            </ul>
        </Row>
    )
}

export default Job;