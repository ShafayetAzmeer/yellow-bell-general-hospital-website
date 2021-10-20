import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AppointmentItem = (props) => {

    const { img,name, speciality, degree} = props.appointmentItems;

    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title className="fs-3 fw-bold pb-2">{name}</Card.Title>
                    <Card.Text>
                        <p className="fs-5">Speciality : {speciality}</p>
                        <p className="fs-5">Degree : {degree}</p>
                        <button className="btn btn-primary">Get Appointment</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AppointmentItem;