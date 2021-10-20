import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Department = (props) => {

    const {id, img,course,description} = props.departments;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title className="fs-3 fw-bold pb-2">{course}</Card.Title>
                    <Card.Text>
                        <p className="fs-5"> {description}</p>
                        <Link to ={`/details/${id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Department;