import React, { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import { Container, Row } from 'react-bootstrap';

const Services = () => {

      const [services, setServices] = useState([]);

      useEffect(()=> {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data.services));
      }, [])  
         
    return (
        <Container id="services">
            <div className="Container Fluid">
                <h2 className="fs-1 fw-bold text-primary mt-5 mb-5">Our Services</h2>
                <Row xs={1} md={3} className="g-4 gs-4">
                    {
                        services.map(service => <Service
                        services = {service}
                        ></Service> )
                    }
                </Row> 
            </div>
        </Container>
    );
};

export default Services;