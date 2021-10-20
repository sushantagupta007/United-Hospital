import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Doctor from '../../Image/doctor.png'

import useFire from './../Hooks/useFire';


const Header = () => {
    const {user,logOut } = useFire(); 
    

    

    const nameShow = () =>{

        if(user.displayName){
            return user.displayName
        }
    }

    const emailNameShow = () =>{
        if(user.email){
            const email = user.email;
            return email.split('@')[0].toUpperCase() 

        }
    }
    return (
        
        
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">
      <img
        src={Doctor}
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className="me-2" to="/Home">Home</Link>
        <Link className="me-2" to="/OurTeam">Our Team</Link>
        <Link className="me-2" to="/Services">Services</Link>
        <Link className="me-2" to="/Contact">Contact</Link>
        <Link className="me-2" to="/Registraion">Registration</Link>
        <Link className="me-2" to="/Research">Research</Link>
        {
           user.email ? <Link  to="/Research">Research</Link>:'' 
        }
        {
           user.email ? <Link  to="/StorySection">StorySection</Link>:'' 
        }
        <Link to="/Login">Login</Link>
        <li className="nav-link fw-bold"> Signed in as {user.displayName ? nameShow():emailNameShow()} </li>
        <li> {user.email? <button type="button" onClick={logOut} className="btn btn-link">Logout </button>: ''}</li>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
};

export default Header;