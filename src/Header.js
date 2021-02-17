import React from "react";
import {Navbar,Nav,FormControl,Form ,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import  { Redirect } from 'react-router-dom'


function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark"  expand="sm" className="px-5">
        <Navbar.Brand Redirect="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
          <Link to="/addproduct" className="btn text-white">ADD PRODUCT</Link>
          <Link to="/products" className="btn text-white">PRODUCTS</Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
