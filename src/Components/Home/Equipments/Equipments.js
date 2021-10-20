import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Equipment from '../Equipment/Equipment';

const Equipments = () => {

    const [equipments, setEquipments] = useState([]);

      useEffect(()=> {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setEquipments(data.equipments));
      }, [])  


    return (
        <Container id="equipments">
            <div className="Container Fluid">
                <h2 className="fs-1 fw-bold text-primary mt-5 mb-5">Our Equipments</h2>
                <Row xs={1} md={3} className="g-4 gs-4">
                    {
                        equipments.map(equipment => <Equipment
                        equipments = {equipment}
                        ></Equipment> )
                    }
                </Row> 
            </div>
        </Container>
    );
};

export default Equipments;