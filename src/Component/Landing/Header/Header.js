import React from 'react';
import { Container, Form, FormControl, Nav, Navbar,Button, Badge } from 'react-bootstrap';
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
            <Nav.Link className="text-white customFont" href="#action1">Home</Nav.Link>
            <Nav.Link className="text-white customFont" href="#action2">About us</Nav.Link>
            <Nav.Link className="text-white customFont" href="#action2">Services</Nav.Link>
            <Nav.Link className="text-white customFont" href="#action2">Doctors</Nav.Link>
            <Nav.Link className="text-white customFont" href="#action2">News</Nav.Link>
            <Nav.Link className="text-white customFont" href="#action2">Contact</Nav.Link>
          
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