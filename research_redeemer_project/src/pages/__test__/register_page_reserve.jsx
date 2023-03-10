import React,{useState} from 'react';
import swal from 'sweetalert';
import {Card,Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import '../styles/register_style.css'


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
    }
   },
   formValid: false,
  })

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
    if(DataState.formValid === true){
      const formData = {};
    for(let name in DataState.formElement){
      formData[name] = DataState.formElement[name].value;
    }
    swal("Alert!!","Success",{
      icon: "success",
      html: <i>{'FormValid:',DataState.formValid,'!!!!Send Data:',formData}</i>,
    });
    console.log('FormValid:',DataState.formValid,'!!!!Send Data:',formData);
    }
    if(DataState.formValid === false){
      swal("Alert!!","Error",{
        icon:'error'
      });
      console.log('ผิดพลาดข้อมูลไม่ครบถ้วนหรือข้อมูลไม่ถูกต้อง')
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
          {String(DataState.formElement['email'].validators.emptyValue)}
          <div className="invalid-feedback">{getErrorMessage('email')}</div>
          </div>
        </div>

        {/* Password input */}
        <div className="form-outline mb-4">
        <div className="form-group">
        <label className="form-label" htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="รหัสผ่าน" className={DataState.formElement['password'].touched?getInputClass('password'):'form-control'} onChange={onFormChange}/>
          {String(DataState.formElement['password'].validators.emptyValue)}
          <div className="invalid-feedback">{getErrorMessage('password')}</div>
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
        <Button type="submit" className="btn btn-primary btn-block mb-4">Submit</Button>
        {/* Register Buttons */}
        </Form>
      </Card>
      <div className="mx-3 mb-3 fw-light">
          <a href="/">-->Go home</a>
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