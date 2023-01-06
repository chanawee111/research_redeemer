import React from 'react';
import {connect} from 'react-redux';
import {Card,Form,Button} from 'react-bootstrap';
import swal from 'sweetalert';


class AddRoom extends React.Component {
  constructor(props) {
    super(props);
     this.state = { 
      id : '',
      name : '',
      status : true
      }
  }
  onChangeData = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmitForm = (data,event) => {
    event.preventDefault();
    const newData = {
        id : data.id,
        name : data.name,
        status : this.state.status
    }
    this.props.addRoomToStore(newData)
    this.setState({
      id : '',
      name : '',
      status : true
    })
    swal({
      title: "AddRoom Successfully!",
      text: "You clicked the button!",
      icon: "success",
      button: "ok!",
    });
  }
 
  render() { 
    return ( 
      <div>
            <h3>เพิ่มจำนวนห้องพัก</h3>    
            <Card className="d-inline-flex">
            <Card.Body>
        <Form onSubmit={this.onSubmitForm.bind(this,this.state)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>หมายเลขห้อง</Form.Label>
        <Form.Control type="text" name="id" value={this.state.id} placeholder="กรอกหมายเลขห้อง" onChange={this.onChangeData}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ชื่อผู้เช่า</Form.Label>
        <Form.Control type="text" name="name" value={this.state.name} placeholder="กรอกชื่อผู้เช่า" onChange={this.onChangeData}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Card.Body>
                </Card>   
        </div>
     );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRoomToStore : newRoomData =>{
      return dispatch({type:'ADD_ROOM',payload: newRoomData})
    }
  }
}
 
export default connect(null, mapDispatchToProps)(AddRoom);