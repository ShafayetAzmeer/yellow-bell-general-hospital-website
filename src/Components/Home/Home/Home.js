import React from 'react';
import Banner from '../Banner/Banner';
import Departments from '../Departments/Departments';
import Equipments from '../Equipments/Equipments';
import Services from '../Services/Services'


const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Departments></Departments>
            <Equipments></Equipments>
        </div>
    );
};

export default Home;