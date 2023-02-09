import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {host,port} from '../../config/apiConfig';

const AdminNavbar = (props) => {
    const navigate = useNavigate();

    const Logout = async () => {
        try{
            await axios.delete(`http://${host}:${port}/logout`);
            navigate("/");
        }catch(err){
            console.log(err);
        }
    }

    return (
    <div>
    <Navbar className="bg-white shadow">
      <Container>
        <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-start">
          <Navbar.Text>
          <Nav.Link href="/">Home</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{props.userName}</a>
          </Navbar.Text>
          <Nav.Link className="mx-3" onClick={Logout}>Logout</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    )
}
export default AdminNavbar;