import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CabinItem = (props) => {

    const { img,name, cost} = props.cabinItems;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title className="fs-3 fw-bold pb-2 text-primary">{name}</Card.Title>
                    <Card.Text>
                        <p className="fs-5 fw-bold">Rate : $ {cost} per night</p>
                        <button className="btn btn-primary">Booking</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CabinItem;