import React from 'react';
import { Container, Form,Nav, Navbar,Button, } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Header.css'
const Header = () => {
  const {googleSignIn,signOutUser,user,regUser}= useAuth(); 

  const history = useHistory(); 

  const handleLogin =() =>{
     history.push('/signup')
  }
  const handleLogout =() =>{
    signOutUser(); 
    console.log("Clicked")
  }
  
  
  const handleClick =() =>{
    history.push('/appointment')
  }
  console.log(regUser)
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
            <NavLink className="text-white customFont me-3" to="/regis"> Registrtion</NavLink>
            <p> Hello Mr. {user.displayName}</p>
            
          </Nav>
          <Form className="d-flex justify-content-between ">
            <Button type="button" className="bg-transparent border-0"> <i className ="fas fa-search"></i> </Button> 
            <Button onClick={handleClick} type="button" className="rounded-pill customButton customFont border-0 me-2"> Appointment </Button>
            {!user.email? 
              <Button onClick={handleLogin} type="button" className="btn  customButton rounded-pill border-0"> Sign Up </Button>
              :
              <Button onClick={handleLogout} type="button" className="btn btn-warning customButton rounded-pill border-0"> Sign Out </Button>
              } 
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;