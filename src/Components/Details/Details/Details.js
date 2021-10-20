import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom';

const Details = () => {

    let {id}=useParams();

    const [details, setDetails] = useState([])
    const [singleDetails, setSingleDetails] = useState({})

    useEffect(()=> {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDetails(data.services));
      }, []) 
    
      useEffect(()=> {

        const foundDetails = details.find((service) =>service.id == id)
        setSingleDetails(foundDetails)
        console.log(foundDetails)
      }, [details]) 

    return (
        <div>
            <h2 className="text-primary mt-5 mb-5"> {singleDetails?.course} Details</h2>
            <Container>
                <Row>
                <Col md={4}>
                    <Card>
                    <Card.Img variant="top" src={singleDetails?.img} />
                    </Card>
                </Col>
                <Col md={5}>
                    <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title className="text-primary fs-2 mt-3 mb-3">{singleDetails?.course}</Card.Title>
                        <Card.Text>
                            <p className=" fs-4"> {singleDetails?.description}</p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Details;