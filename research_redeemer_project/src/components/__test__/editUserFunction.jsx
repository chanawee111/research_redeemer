import React,{useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../middleware/action'
import {Card,Button,Form} from 'react-bootstrap';
import {Link,useNavigate} from "react-router-dom";

const EditUserFunction = (props) => {
    const navigate = useNavigate();
    const [formConfig,setFormConfig] = useState({
        idEdit: false
    })
    const [userData,setUserData] = useState({
        id: '',
        name: '',
        email: '' 
    })
    const onChangeData = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
    }
    const onSubmitUserForm = (data,event) => {
        event.preventDefault();
        let newData = {}
        const checkPreviosDuplicate = data.name === props.userData.name && data.email === props.userData.email;
        const checkEmpty = data.name === "" && data.email === "" ;

        if(checkPreviosDuplicate){
            alert("Error Duplicate Values")
        }else if(checkEmpty){
            alert("Error Empty Values")     
        }else {
            newData = {
                id: props.userData.id,
                name: data.name,
                email: data.email 
            } 
            console.log("Send Form--------newDataForm :",newData);   
            props.editUserDataAtStore(newData); 
        }
        //props.editFn(newData);
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

const mapStateToProps = (dispatch) => {
    return {
        editUserDataAtStore: (data) => {return dispatch(actions.editUser(data))}
    }
}


export default connect(null,mapStateToProps)(EditUserFunction);