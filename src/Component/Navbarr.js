import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import {Nav,NavDropdown} from 'react-bootstrap'

class Navbarr extends Component {
    render() {
        return (
          <>  
   
   <div className="container-fluid nav_bg">
    <div className="row">
      <div className="col-10 mx-auto">
      


  <Navbar collapseOnSelect expand="lg" bg="white">
  <Navbar.Brand href="/" className="brand">FIX-IT</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <NavLink active exact to="/" activeClassName="navitem" className="navitemstyle">Home</NavLink>
      <NavLink to="/service" activeClassName="navitem" className="navitemstyle">Services</NavLink>
      <NavLink to="/about" activeClassName="navitem" className="navitemstyle">About</NavLink>
      <NavLink to="/contact" activeClassName="navitem" className="navitemstyle">Contact</NavLink>
    </Nav>

  </Navbar.Collapse>
</Navbar>

</div>
</div>
</div>
  
            </>
        );
    }
}

export default Navbarr;