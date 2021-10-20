import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Department from '../Department/Department';

const Departments = () => {

    const [departments, setDepartments] = useState([]);

      useEffect(()=> {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDepartments(data.departments));
      }, [])  

    return (
        <Container id="departments">
            <div className="Container Fluid">
                <h2 className="fs-1 fw-bold text-primary mt-5 mb-5">Our Departments</h2>
                <Row xs={1} md={3} className="g-4 gs-4">
                    {
                        departments.map(equipment => <Department
                        departments = {equipment}
                        ></Department> )
                    }
                </Row> 
            </div>
        </Container>
    );
};

export default Departments;