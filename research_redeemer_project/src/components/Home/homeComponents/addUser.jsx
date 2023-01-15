import React,{useState} from 'react';
import {connect} from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import * as actions from '../../../middleware/action';


const AddUser = (props) => {
    const [userData,setUserData] = useState({
        name: '',
        email: ''
    })

    const onChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
        console.log(userData);
    }
    const onSubmit = (data,event) => {
        event.preventDefault();
        const newData = {
            name: data.name,
            email: data.email
        }
        console.log('form data:',newData)
        props.addUserAtStore(newData)
        window.location.reload(false);
    }

    return ( 
        <div className="my-5"> 
            <h2>ADD USER</h2>
            <Card style={{ width: '18rem' }} className="shadow">
      <Card.Body>
        <Card.Title>เพิ่มผู้ใช้</Card.Title>
        <Form onSubmit={onSubmit.bind(this,userData)}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" name="name" placeholder="Enter Username" value={userData.name} onChange={onChange}/>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="username" name="email" placeholder="Enter Email" value={userData.email} onChange={onChange}/>
            </Form.Group>


            <Button type="submit" variant='primary'>ADD</Button>
    </Form>
      </Card.Body>
    </Card>
        </div>
     );
}
const mapDispatchToProps=(dispatch) =>{
    return {
        addUserAtStore: (newUserData)=> {
            return dispatch(actions.addUser(newUserData));
        }
    }
}
 
export default connect(null,mapDispatchToProps)(AddUser);