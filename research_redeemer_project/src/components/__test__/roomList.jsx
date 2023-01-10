import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Card,Button,Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom'

class roomList extends Component {
    render() { 
        const emptyStatus = (
            <Badge bg="success">
            ว่าง
           </Badge>
        );
        const nonEmptyStatus = (
            <Badge bg="danger">
                ไม่ว่าง
            </Badge>
        );
        const delFn = this.props.deleteRoomAtStore;
        return (
        <div className="m-1">
            <Card className="w-auto">
            <Card.Header>Room No.{this.props.data.id}</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          ผู้เช่า : {this.props.data.name}<br></br>
          Status : {this.props.data.status?emptyStatus:nonEmptyStatus}
        </Card.Text>
        <Link to={`/edit/${this.props.data.id}`} className="text-light text-decoration-none"><Button variant="primary">EDIT</Button></Link>{" "}
        <Button variant="danger" onClick={delFn.bind(this,this.props.data.id)}>Delete</Button>
      </Card.Body>
    </Card>
        </div> 
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteRoomAtStore : id => {
            return dispatch({type:'DEL_ROOM',payload:id});

        }
    }
}
 
export default connect(null,mapDispatchToProps)(roomList);