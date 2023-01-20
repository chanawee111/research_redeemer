import React from 'react';
import {Card,Button,Form} from 'react-bootstrap';
import { Link } from "react-router-dom";

const EditUserFunction = (props) => {
    return ( 
        <div>
            <h1>EditUserFunction</h1>
            <Card className='d-inline-flex w-50'>
                    <Card.Header>EditUser ID: {props.userData.id}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Name : {props.userData.name}<br/>
                        Email : {props.userData.email}
                        </Card.Text>
                    <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                         </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                     <Form.Check type="checkbox" label="Check me out" />
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