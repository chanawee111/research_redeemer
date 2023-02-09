import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Card} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {host,port} from '../config/apiConfig';
import '../styles/login_page.css'



const Login_Page = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [msg,setMsg] = useState('');
  const navigate = useNavigate();

  const Auth = async (evnet) => {
    evnet.preventDefault();
    try{
      console.log("Login Submit Data:",email,password);
      await axios.post(`http://${host}:${port}/login`,{
        email : email,
        password : password
      });
      navigate('/dashboard_admin');
    }catch(err){
      if(err.response){
        setMsg(err.response.data.msg);
      }
    }
  }

    return(
      <div className="loginPage">
      <div className="row justify-content-md-center">
         <div className="col col-md-auto p-5">
        <div className="fs-1 text-center">Sign in</div>
         <Container>
          <Card className="p-3 m-3 bg-light shadow-sm">
      <Form onSubmit={Auth}>

      {/* Email input */}
      <div className="form-outline mb-4">
        <div className="form-group">
        <label className="form-label" htmlFor="username">Email or Username</label>
        <input type="text" name="username" id="username" className="form-control" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <div className="valid-feedback">User Founded</div>
        </div>
      </div>

      {/* Password input */}
      <div className="form-outline mb-4">
      <div className="form-group">
      <label className="form-label" htmlFor="password">Password</label>
      <input type="password" name="password" id="password" className="form-control" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <div className="invalid-feedback">Password Invalid</div>
      </div>
      </div>

      {/* 2 column grid layout for inline styling */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          {/* Checkbox */}
          {/* <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue id="form2Example31" defaultChecked />
            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
          </div> */}
        </div>
      </div>
      {/* Submit Button */}
      <Button type="submit" className="btn btn-primary btn-block mb-4 is-success">Sign in</Button>
      {/* Register Buttons */}
      <div className="col">
          {/* Simple link */}
          <a href="#!">Forgot password?</a>
        </div>
      </Form>
    </Card>
    <div className="mx-3 mb-3 fw-light">
        <a href="/">-->Go home</a>
      </div>
      <div className="d-flex justify-content-center">
        <Card className="px-2 text-center">
          
          Not a member?<a href="register">Register</a>
        
        </Card>  
      </div>
   
    </Container>
    </div>
    </div>
    </div>
    );
};

export default Login_Page;