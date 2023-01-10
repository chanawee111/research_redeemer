import React from 'react';
import {connect} from 'react-redux';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

import * as actions from '../../../middleware/action';
import EditUser from './editUser';
import DeleteUser from './deleteUser';

class EmptyRoom extends React.Component {
    componentDidMount() {
        this.props.getAllUsers();
    }
    render() { 
        const{stateFromStore,loading} = this.props
        console.log(stateFromStore,loading)
        console.log("Check Load content",stateFromStore >0)
        let lists = (
            <div>
                <h1>No Data</h1>
            </div>
        )

        if(stateFromStore.length > 0) {
            lists = stateFromStore.map(item => (
 
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{<EditUser></EditUser>} {<DeleteUser></DeleteUser>}</td>
                </tr>
                    ))
        }


        if(loading === true) {
            lists = <div>
                 <Spinner animation="border" role="status">
                     <span className="visually-hidden">Loading...</span>
                 </Spinner>
            </div>
        }
        return (
            <div>
                <h1>User Lists</h1>
                <Table bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th ></th>
        </tr>
      </thead>
      <tbody>
      {lists}
      </tbody>
  
      <tr>
        <th>Total</th>
        <td>{this.props.stateFromStore.length} user</td>
      </tr>
    
    </Table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        stateFromStore : state.users,
        loading : state.isLoading
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getAllUsers: () => {
            dispatch(actions.getUserLists());
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(EmptyRoom);

// const EmptyRoom = (props) => {
   
//     const {stateFromStore,loading} = props
//     console.log(stateFromStore,"and",loading)
//     let lists = (
//         <div>
//             No Data
//         </div>
//     )
//     if(stateFromStore > 0){
//         lists = stateFromStore.map(item =>(
//             <div key={item.id}>
//                 {item.name}
//             </div>
//         ))
//     }
//     if(loading === true){
//         lists = (<div>
//             loading
//         </div>)
//     }

//     return (<div>
//          <h1>Empty Room</h1>
//          <Badge className="fs-5 m-1">จำนวนทั้งหมด : {props.stateFromStore.length}</Badge>
//         <div className="d-flex align-content-start flex-wrap">
//             {lists}
//         </div>
//         </div>
//     );
// }
// const mapStateToProps = (state) => {
//     return {
//         stateFromStore : state.users, 
//         loading:         state.isLoading
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getUserLists: () =>{
//             return dispatch(actions.getUserLists())
//         }
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(EmptyRoom)
