import React,{useState,useEffect} from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';

import swal from 'sweetalert';
import {Card,Badge,ListGroup,InputGroup} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
//import { setDefaults } from 'sweetalert/typings/modules/options';

const DisplayRoom = (props) => {
    // const {id} = useParams();
    // const [roomData,setRoomData] = useState(
    //     {
    //         id:'',
    //         name:'',
    //         status: ''
    //     }
    // );
    // const [count, setCount] = useState(-1);

    // const getCurrentRoom=(id) => {
    //     const allRooms = props.stateFromStore;
    //     const [room] = allRooms.filter(item => item.id === id);
    //     return room;
    // }
    // useEffect(()=>{
    //     const room = getCurrentRoom(parseInt(id));
    //     setRoomData({
    //         id:room.id,
    //         name:room.name,
    //         status:room.status 
    //     })   
    //     console.log("roomData State:",roomData)
    //     console.log('room :',room) 
    //     setCount(count + 1)
    // },[])

    // const onChangeData = (event) => {
    //     setRoomData({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // return ( 
    // // <div>
    // //     <h3>Detail of Room no: {id}</h3>
    // //     <h1>{props.stateFromStore[id-1].name}</h1>
    // //     <h3>{props.stateFromStore[id-1].status?"ว่าง":"ไม่ว่าง"}</h3>
    // //     <a href="/empty_rooms">-->Go home</a>
    // // </div>  
    // <div className="loginPage" >
    //   <div className="row justify-content-md-center">
    //      <div className="col col-md-auto p-5">
    //     <div className="fs-1 text-center">Editing Page Room : {id}</div>
    //      <Container>
    //       <Card className="p-3 m-3 bg-light shadow-sm">
    //   <Form>

      
    //   <div className="form-outline mb-4">
    //     <div className="form-group">
    //     <label className="form-label" htmlFor="id">หมายเลขห้อง</label>
    //     <input type="text" name="id" id="id" value={roomData.id} onChange={onChangeData} className="form-control"/>
    //     </div>
    //   </div>

    //   <div className="form-outline mb-4">
    //   <div className="form-group">
    //   <label className="form-label" htmlFor="name">ชื่อผู้เช่า</label>
    //   <input type="name" name="name" id="name" value={roomData.name} onChange={onChangeData} className="form-control"/>
    //   </div>
    //   </div>

    //   <div className="form-outline mb-4">
    //   <div className="form-group">
    //   <label className="form-label" htmlFor="status">สถานะ</label>
    //   <Form.Check 
    //     type="switch"
    //     id="custom-switch"
    //     label={props.stateFromStore[id-1].status?<Badge bg="success">ว่าง</Badge>:<Badge bg="danger">ไม่ว่าง</Badge>}
    //   />
    //   </div>
    //   </div>
    //   {/* Submit Button */}
    //   <Button type="button" className="btn btn-primary btn-block mb-4">Save</Button>
    //   {/* Register Buttons */}
    //   </Form>
    // </Card>
    // </Container>
    // </div>
    // </div>
    // </div> 
    // );
    const {id} = useParams();
    const navigate = useNavigate();
    const valueFromStore = props.stateFromStore[id-1]
    console.log("//// From StateFromStore :",valueFromStore)
    const [roomData,setRoomData] = useState(
      {
        id : valueFromStore.id,
        name : valueFromStore.name,
        status : valueFromStore.status
      }
    );
    const [editID , setEditID] = useState(
      {statusForEdit:false}
    )
    const [drink,setDrink] = useState("Tea");

    useEffect(() => {
      console.log(drink);
      
    })

    const handleClick = () => {
      setDrink("Coffee");
    }
    // const onChangeData = ({ target: { name, value } }) => {
    //   setRoomData({ ...roomData, [name]: value });
    // };
    const onChangeData = (event) => {
      setRoomData({
        ...roomData, [event.target.name] : event.target.value
      })
    }

    const ToggleEditID = () => {
      setEditID({
        statusForEdit:!editID.statusForEdit
      })
    }

    const navigateHome = (data) => {
      swal({
        title: "บันทึกการเปลี่ยนเเปลงเเล้ว",
        text: JSON.stringify(data),
        icon: "success",
        buttons: [
          'รับทราบ',
          'กลับสู่หน้าหลัก'
        ],
        dangerMode: false,
      }).then((result)=> {
        if(result){
          navigate('/empty_rooms')
        }else {

        }
      })
    }

    const onSubmitEditedRoom = (event) => {
      event.preventDefault();
      const newData = {
        id : parseInt(roomData.id),
        name : roomData.name,
        status : roomData.status
      }
      console.log("Submit Data:",newData);
      navigateHome(newData);
      props.editRoomAtStore(newData);
    }

  return (
    <div className="bg-white">
     
    <Container>
    
    <div className='bg-white' style={{paddingTop:"80px"}}>
    <div className="row justify-content-md-center">
      <div className='col-12'>
      <h1>{drink} is available</h1>
      <h1>{JSON.stringify(props.stateFromStore[id-1])}</h1>
      </div>
    <div className="col-12 col-md-auto p-5">
      
      <div className='d-inline-flex col'>
      <Card>
      <Card.Title className='p-3'>Room no: {id}</Card.Title>
      
          <Card.Body>
        {props.stateFromStore[id-1].id}<br/>
        {props.stateFromStore[id-1].name}<br/>
        {props.stateFromStore[id-1].status?"Empty":"No Empty"}<br/>
      <button onClick={handleClick}> Click me </button>   
          </Card.Body>
          <Card.Body>
            {JSON.stringify(roomData)}<br/>
            {String(editID.statusForEdit)}
            <div className='my-1'>
            <ListGroup as="ul">
      <ListGroup.Item as="li" active>
       ข้อมูลห้องโดยรวม
      </ListGroup.Item>
      <ListGroup.Item as="li">ID : <Badge>{roomData.id}</Badge></ListGroup.Item>
      <ListGroup.Item as="li">Name : <Badge>{roomData.name}</Badge></ListGroup.Item>
      <ListGroup.Item as="li">Status : <Badge>{String(roomData.status)}</Badge></ListGroup.Item>
    </ListGroup>
            </div>
            <hr/>
          <Form onSubmit={onSubmitEditedRoom}>
          <Form.Group className="mb-3" htmlFor='id' controlId="formRoom">
          <Form.Label >หมายเลขห้อง</Form.Label>
          <InputGroup className="mb-3">
        <Form.Control type="text"  name="id" placeholder="ชื่อห้อง" defaultValue={valueFromStore.id} disabled={!editID.statusForEdit} onChange={onChangeData}/>
        <Button variant={editID.statusForEdit?"success":"danger"} id="button-addon2" onClick={ToggleEditID}>
          {editID.statusForEdit?"ปิดให้เเก้ไข":"เปิดให้เเก้ไข"}
        </Button>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" htmlFor='name' controlId="formRoom">
        <Form.Label >ชื่อห้องพัก</Form.Label>
        <Form.Control type="text"  name="name" placeholder="ชื่อห้อง" defaultValue={valueFromStore.name} onChange={onChangeData}/>
        <Form.Text className="text-muted">
          <p><i className='text-danger'>*หมายเหตุ</i> เเสดงหมายเลขห้อง</p>
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" htmlFor="status" controlId="formRoom">
          <Form.Label>สถานะห้องพัก</Form.Label>
          <Form.Select 
          name="status"
          defaultValue={valueFromStore.status?"ว่าง":"ไม่ว่าง"}
          onChange={onChangeData}>
            <option value={true}>ว่าง</option>
            <option value={false}>ไม่ว่าง</option>
          </Form.Select>
      </Form.Group>
        
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          </Card.Body>
     
        <Card.Footer>
          <button><a style={{color: 'white'}}href='/empty_rooms'>-->Go home</a></button>
        </Card.Footer>
      </Card>
      </div>
      </div>
      </div>
    </div>
    </Container>
    </div>
  );
}


 const mapStateToProps = (state)=>{
    return {
        stateFromStore : state.rooms
    }
 }
 const mapDispatchToProps = (dispatch)=>{
    return {
        editRoomAtStore : id => dispatch({type:'EDIT_ROOM',payload:id})     
    }
 }

export default connect(mapStateToProps,mapDispatchToProps)(DisplayRoom);