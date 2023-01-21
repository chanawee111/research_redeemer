import React,{useState} from 'react';
import {Card,Button,Form} from 'react-bootstrap';
import {Link,useNavigate} from "react-router-dom";

const EditUserFunction = (props) => {
    const navigate = useNavigate();
    const [formConfig,setFormConfig] = useState({
        idEdit: false
    })
    const [userData,setUserData] = useState({
        id: props.userData.id,
        name: props.userData.name,
        email: props.userData.email 
    })
    const onChangeData = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
    }
    const onSubmitUserForm = (data,event) => {
        event.preventDefault();
        const newData = {
            id: data.id,
            name: data.name,
            email: data.email
        }
        console.log("--------newDataForm :",newData)
        props.editFn(newData);
       // navigate("/empty_rooms");
    }

    return ( 
        <div>
            <h1>EditUserFunction</h1>
            <Card className='d-inline-flex'>
                    <Card.Header>EditUser ID: {props.userData.id}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Name : {props.userData.name}<br/>
                        Email : {props.userData.email}<br/>
                        Array Data:{JSON.stringify(userData)}
                        </Card.Text>
                        <hr/>
                    <Form onSubmit={onSubmitUserForm.bind(this,userData)}>
                    <Form.Group className="mb-3" controlId="id">
                       <Form.Label><a className='text-danger'>*New</a> ID</Form.Label>
                      <Form.Control type="text" value={props.userData.id} onChange={onChangeData}/>
                        </Form.Group>

                     <Form.Group className="mb-3" controlId="name">
                       <Form.Label><a className='text-danger'>*New</a> Name</Form.Label>
                      <Form.Control type="name" name="name" onChange={onChangeData}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                     <Form.Label><a className='text-danger'>*New</a> Email</Form.Label>
                     <Form.Control type="email" name="email" onChange={onChangeData}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                    </Card.Body>
                </Card><br/>
                <Link to="/empty_rooms">Home</Link>
        </div>
     );
}

export default EditUserFunction;