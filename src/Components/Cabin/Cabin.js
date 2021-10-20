import React from 'react';
import CabinItems from '../CabinItems/CabinItems';
import './Cabin.css';

const Cabin = () => {
    return (
        <div className="mb-5 mt-5 cabinStyle pt-5 pb-5" id="cabin">
        <h1 className="fs-1 fw-bold mb-5 text-primary">Our Special Cabin And Wards</h1>
        <CabinItems></CabinItems>
    </div>
    );
};

export default Cabin;