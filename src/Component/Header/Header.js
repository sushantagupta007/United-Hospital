import React from 'react';
import { Container, Form, FormControl, Nav, Navbar,Button, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
      <Navbar className="customBackground" expand="md">
      <Container >
        
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-md-0"
            style={{ maxHeight: 'auto' }}
            navbarScroll >
            <NavLink className="text-white customFont me-3" to="/home">Home</NavLink>
            <NavLink className="text-white customFont me-3" to="/about">About us</NavLink>
            <NavLink className="text-white customFont me-3" to="/service">Services</NavLink>
            <NavLink className="text-white customFont me-3" to="/doctor">Doctors</NavLink>
            <NavLink className="text-white customFont me-3" to="/blog">News</NavLink>
            <NavLink className="text-white customFont me-3" to="/contact">Contact</NavLink>
          
          </Nav>
          <Form className="d-flex">
            <Button type="button" className="bg-transparent border-0"> <i className ="fas fa-search"></i> </Button> 
            <Button type="button" className="rounded-pill customButton customFont border-0"> Appointment </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;