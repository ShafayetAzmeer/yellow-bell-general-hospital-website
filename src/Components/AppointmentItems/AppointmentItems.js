import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AppointmentItem from '../AppointmentItem/AppointmentItem';
    

const AppointmentItems = () => {

    const [appointmentItems, setAppointmentItems] = useState([]);

      useEffect(()=> {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAppointmentItems(data.doctors));
      }, []) 

    return (
        <Container>
            <div className="Container mb-5">
                <Row xs={1} md={3} className="g-4 gs-4">
                    {
                        appointmentItems.map(item => <AppointmentItem
                        appointmentItems = {item}
                        ></AppointmentItem> )
                    }
                </Row> 
            </div>
        </Container>
    );
};

export default AppointmentItems;