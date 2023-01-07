import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import logo from '../../assets/owl-logo.png'

const NavBar = () => {
    return(
        <Navbar className="shadow bg-light fixed-top" expand="lg">
          <Navbar.Brand className="mx-2" href="/"><div><img src={logo} alt="Logo" width="50" height="50"></img> Wisdom of Mankind</div></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginRight:"2%"}} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="" style={{marginLeft:"1%"}}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/link" >Link</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end" style={{marginRight:"1%"}}>
          <Nav>
          <Link to="login"><Button variant="outline-light" className="text-dark">Sign in</Button></Link>
          <Link to="register"><Button variant="outline-dark">Sign up</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
export default NavBar;