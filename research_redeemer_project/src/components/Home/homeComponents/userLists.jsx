import React from 'react';
import{Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button';
import * as actions from '../../../middleware/action';

const UserLists = (props) => {
    const delFn = props.deleteUserAtStore;

    return (    
        <tr>
                  <td>{props.userIndex}</td>
                  <td>{props.data.id}</td>
                  <td>{props.data.name}</td>
                  <td>{props.data.email}</td>
                  <td className="w-25"><Link className="text-white text-decoration-none" to={`/edit/${props.data.id}`}><Button>Edit</Button></Link>{" "}
                  <Button variant='danger' onClick={()=>{delFn(props.data.id)}}>Delete</Button>
                  </td>
        </tr>
     );
}
const mapStateToProps = (dispatch) => {
    return {
        deleteUserAtStore: (id)=>{return dispatch(actions.delUser(id))}
    }
}
 
export default connect(null,mapStateToProps)(UserLists);