import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
           <> 
            <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg"> 
                <Container>
                <Navbar.Brand href="#home">Yellow Bell General Hospital</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home" className="text-light">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services" className="text-light">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#departments" className="text-light">Departments</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#equipments" className="text-light">Equipments</Nav.Link>
                    <Nav.Link as={HashLink} to="/appoinment" className="text-light">Find Your Doctor</Nav.Link>
                    <Nav.Link as={HashLink} to="/cabin" className="text-light">Ward and Cabin</Nav.Link>
                

                    {   user?.email ?
                        <Button onClick={logOut} variant="light">Logout</Button>:
                        <Nav.Link as={Link} to="/register" className="text-light">Log in</Nav.Link>
                    }
                    {   user.email &&
                        <Navbar.Text>
                        <span className="text-light px-3"> Signed in  as </span>  <a href="#register"> {user?.displayName}</a>
                        </Navbar.Text>}
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </> 
    );
};

export default Header;