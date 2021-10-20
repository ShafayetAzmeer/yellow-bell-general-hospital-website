import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Equipment = (props) => {

    const {id, img,course,description} = props.equipments;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title className="fs-3 fw-bold pb-2">{course}</Card.Title>
                    <Card.Text>
                        <p className="fs-5"> {description}</p>
                        
                            <button className="btn btn-primary">Details</button>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Equipment;