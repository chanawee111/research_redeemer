import React,{useState} from "react";
import {Card} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import '../styles/login_page.css'


const Login_Page = () => {
  const [DataState,SetDataState] = useState(
    {
      username: '',
      password: ''
    }
  )
  function onInputChange(event) {
     SetDataState({
        ...DataState,
        [event.target.name]: event.target.value
      })
     console.log('username:',DataState.username,'password:',DataState.password)
  }

    return(
      <div className="loginPage">
      <div className="row justify-content-md-center">
         <div className="col col-md-auto p-5">
        <div className="fs-1 text-center">Sign in</div>
         <Container>
          <Card className="p-3 m-3 bg-light shadow-sm">
      <Form>

      {/* Email input */}
      <div className="form-outline mb-4">
        <div className="form-group">
        <label className="form-label" htmlFor="username">User name</label>
        <input type="text" name="username" id="username" className="form-control is-valid" onChange={onInputChange}/>
        <div className="valid-feedback">User Founded</div>
        </div>
      </div>

      {/* Password input */}
      <div className="form-outline mb-4">
      <div className="form-group">
      <label className="form-label" htmlFor="password">Password</label>
      <input type="password" name="password" id="password" className="form-control is-invalid" onChange={onInputChange}/>
      <div className="invalid-feedback">Password Invalid</div>
      </div>
      </div>

      {/* 2 column grid layout for inline styling */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          {/* Checkbox */}
          <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue id="form2Example31" defaultChecked />
            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
          </div>
        </div>
        <div className="col">
          {/* Simple link */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>
      {/* Submit Button */}
      <Button type="button" className="btn btn-primary btn-block mb-4" onClick={()=>{console.log("data",DataState)}}>Sign in</Button>
      {/* Register Buttons */}
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