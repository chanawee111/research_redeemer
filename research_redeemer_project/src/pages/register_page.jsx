import React,{useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import {Card,Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import '../styles/register_style.css';
import {host,port} from '../config/apiConfig';


const Register = () => {
  const [DataState,SetDataState] = useState({
   formElement:{
    username:{
      type : 'text',
      value: '',
      validators:{
        required: true,
        emptyValue : true,
        minLength: 5,
        maxLength: 15
      },
      touched : false,
      error:{status:true,message:''}
    },
    email:{
      type : 'email',
      value: '',
      validators:{
        required: true,
        emptyValue : true,
        pattern: 'email'
      },
      touched : false,
      error:{status:true,message:''}
    },
    password:{
      type : 'password',
      value: '',
      validators:{
        required: true,
        emptyValue : true,
        minLength: 8,
        maxLength: 20
      },
      touched : false,
      error:{status:true,message:''}
    },
    confirmPassword:{
      type : 'password',
      value: '',
      validators:{
        required:true,
        emptyValue : true,
        matching : false,
        pattern: 'confirmPassword'
      },
      touched : false,
      error:{status:true,message:''}
    }
   },
   formValid: false,
  })
  const navigate = useNavigate();

  function onChange(event) {
    SetDataState({
      ...DataState,
      [event.target.name]: event.target.value
    })
    console.log('username:',DataState.username, 'password:',DataState.password)
  }

  function checkValiator(value,rule) {
    let valid = true;
    let message = '';
    console.log('Value on Validator:',value)
    console.log('Ruleon Validator:',rule)

    if(value.trim().length === 0 && rule.required){
      valid = false;
      message = "จำเป็นต้องกรอก";
    }

    if(value.length < rule.minLength && valid){
      valid = false;
      message = `น้อยกว่า ${rule.minLength} ตัวอักษร`;
    }

    if(value.length > rule.maxLength && valid){
      valid = false;
      message = `ห้ามมากกว่า ${rule.maxLength} ตัวอักษร`;
    }

    if(rule.pattern === 'email' && valid){
      if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) === false){
        valid = false;
        message = 'กรอกอีเมล์ไม่ถูกต้อง';
      }
    }
    if(rule.pattern === 'confirmPassword' && valid){
      if(rule.emptyValue === false){
        if(value.trim() !== DataState.formElement.password.value){
          valid = false;
          message = 'รหัสผ่านไม่ตรง';
        }
      }
    }

    return {status:!valid,message:message}
  }

  function checkEmpty(value,rule){
    console.log('Rule Check Empty:',rule)
    let emptyInput = rule.emptyValue;
    if(value.trim().length === 0){
      emptyInput = true
    } 
    if(value.trim().length !== 0){
      emptyInput = false
    }
    return emptyInput;
    }
  
  function onFormChange(event){
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value)
    let updateForm = {...DataState.formElement};
    console.log(updateForm)
    updateForm[name].value = value;
    updateForm[name].touched = true;
    const checkEmptyObject = checkEmpty(value,updateForm[name].validators.emptyValue);
    const validatorsObject = checkValiator(value,updateForm[name].validators);
    
    updateForm[name].error = {
      status: validatorsObject.status,
      message: validatorsObject.message
    }

    console.log('--EmptyStatus of ',name,'IS===', checkEmptyObject)
    console.log('--Before Update emptyValue:', updateForm[name].validators.emptyValue);
    updateForm[name].validators.emptyValue = checkEmptyObject
    console.log('--After Update emptyValue:', updateForm[name].validators.emptyValue);

    let formStatus = true;
    for(let name in updateForm){
      if(updateForm[name].validators.required === true){
        formStatus = !updateForm[name].error.status && formStatus;
      }
    }

    SetDataState({
      ...DataState,
      formElement: updateForm,
      formValid : formStatus
    })
  }

  function getInputClass(name) {
    const elementErrorStatus = DataState.formElement[name].error.status;
    return elementErrorStatus && DataState.formElement[name].touched?'form-control is-invalid':'form-control is-valid';
  }

  function getErrorMessage(name){
    return DataState.formElement[name].error.message;
  }

  async function onFormSubmit(event){
    event.preventDefault();
    // if(DataState.formValid === true){
    //   const formData = {};
    // for(let name in DataState.formElement){
    //   formData[name] = DataState.formElement[name].value;
    // }
    // Swal.fire({
    //   title: 'Successfully!',
    //   text: 'You Shall Pass Data:',
    //   html: `FormValid:${DataState.formValid} `+`Data:`+JSON.stringify(formData),
    //   icon: 'success',
    //   confirmButtonText: 'Cool'
    // }).then(() => {
    //   Swal.fire({
    //     title:"Back to Home page",
    //     icon: 'warning'
    //   }).then(() => {
    //     navigate("/");
    //   })
    // });

    // console.log('FormValid:',DataState.formValid,'!!!!Send Data:',formData);
    // }
    // if(DataState.formValid === false){
    //   Swal.fire({
    //     title: 'Error!',
    //     text: 'Do you want to continue',
    //     icon: 'error',
    //     confirmButtonText: 'OK'
    //   })
    //   console.log('ผิดพลาดข้อมูลไม่ครบถ้วนหรือข้อมูลไม่ถูกต้อง')
    // }
    try{
      if(DataState.formValid === true){
        const formData = {};
        for(let name in DataState.formElement){
            formData[name] = DataState.formElement[name].value;
            console.log("Name",name,":",DataState.formElement[name].value);
        }

        console.log("!!!!Send Data:",formData);
        await axios.post(`http://${host}:${port}/users`,{
          name : formData.username,
          email : formData.email,
          password : formData.password,
          confPassword : formData.confirmPassword
        });
        Swal.fire({
            title: 'Successfully!',
            text: 'You Shall Pass',
            icon: 'success',
            confirmButtonText: 'ย้อนกลับไปที่หน้าหลัก'
          }).then(()=>{
            navigate("/");
          })
      }
      if(DataState.formValid === false){
        Swal.fire({
          title: 'Error!',
          text: 'ผิดพลาดข้อมูลไม่ครบถ้วนหรือข้อมูลไม่ถูกต้อง',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }catch(err){
      if(err.response){
        console.log(err.response.data.msg)
      }
    }
  }

    return ( 
      
        <div className="registerPage">
        <Row className="justify-content-md-center">

           
           <Col sm md xs lg="auto" className="p-5" style={{width: '60vh'}}>
           <Container>
            <div className="mx-1">
           <div className="fs-1 text-center">Register</div>
            <Card className="p-3 m-3 bg-light shadow-sm">
        <Form onSubmit={onFormSubmit}> 

        {/* user input */}
        <div className="form-outline mb-4">
          <div className="form-group">
          <label className="form-label" htmlFor="username">User Name</label>
          <input type="text" name="username" id="username" placeholder="ชื่อผู้ใช้" className={DataState.formElement['username'].touched?getInputClass('username'):'form-control'} onChange={onFormChange}/>
          {String(DataState.formElement['username'].validators.emptyValue)}
          <div className="invalid-feedback">{getErrorMessage('username')}</div>
          </div>
        </div>

        {/* Email input */}
        <div className="form-outline mb-4">
          <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="อีเมล์" className={DataState.formElement['email'].touched?getInputClass('email'):'form-control'} onChange={onFormChange}/>
          <Form.Text id="EmailHelpBlock" muted>
          We'll never share your email with anyone else.
      </Form.Text><br/>
          {String(DataState.formElement['email'].validators.emptyValue)}
          <div className="invalid-feedback">{getErrorMessage('email')}</div>
          </div>
        </div>

        {/* Password input */}
        <div className="form-outline mb-4">
        <div className="form-group">
        <label className="form-label" htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="รหัสผ่าน" className={DataState.formElement['password'].touched?getInputClass('password'):'form-control'} onChange={onFormChange}/>
          <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text><br/>
          {String(DataState.formElement['password'].validators.emptyValue)}
          <div className="invalid-feedback">{getErrorMessage('password')}</div>
          </div>
        </div>

        {/* ConfirmPassword */}
        <div className="form-outline mb-4">
        <div className="form-group">
        <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" 
          name="confirmPassword" 
          id="confirmPassword" 
          placeholder="โปรดกรอกรหัสผ่านอีกครั้ง" 
          className={DataState.formElement['confirmPassword'].touched?getInputClass('confirmPassword'):'form-control'} 
          onChange={onFormChange} 
          disabled={DataState.formElement.password.validators.emptyValue?true:false}
          />
          {DataState.formElement['password'].validators.emptyValue?<div className="text-warning">โปรดกรอกรหัสผ่านช่องเเรก</div>:null}
          <div className="invalid-feedback">{getErrorMessage('confirmPassword')}</div>
          </div>
        </div>
       

        {/* Password input Repeat*/}
        {/* <div className="form-outline mb-4">
        <div className="form-group">
          <input type="password" name="passwordRepeat" id="form2Example2" className="form-control" onChange={onChange}/>
          <label className="form-label" htmlFor="passwordRepeat">Repeat Password</label>
        <div className="invalid-feedback">รหัสผ่านไม่ตรง</div>
        </div>
        </div> */}

        {/* Show Error Report */}
        {}
      
        {/* Submit Button */}
        <Button type="submit" className="btn btn-primary btn-block mb-4" disabled={!DataState.formValid?true:false}>Submit</Button>
        {/* Register Buttons */}
        </Form>
      </Card>
      <div className="mx-3 mb-3 fw-light">
          <a href="/"> (-->Go home)</a>
        </div>
        <div className="d-flex justify-content-center">
          <Card className="px-2 text-center">
            
            are you member?<a href="login">Sign in</a>
          
          </Card>  
        </div>
        </div>
        </Container>
        </Col>
      </Row>
      </div>
      
     );
}

export default Register;