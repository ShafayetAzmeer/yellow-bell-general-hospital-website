import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CabinItem from '../CabinItem/CabinItem';

const CabinItems = () => {

    const [cabinItems, setCabinItems] = useState([]);

      useEffect(()=> {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCabinItems(data.cabin));
      }, []) 

    return (
        <Container>
            <div className="Container mb-5">
                <Row xs={1} md={3} className="g-4 gs-4">
                    {
                        cabinItems.map(item => <CabinItem
                        cabinItems = {item}
                        ></CabinItem> )
                    }
                </Row> 
            </div>
        </Container>
    );
};

export default CabinItems;