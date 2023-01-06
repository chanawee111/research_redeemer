import React from 'react';
import {connect} from 'react-redux';
import {Badge} from 'react-bootstrap';
import RoomList from '../roomList';
import AddRoom from '../../__test__/AddRoom'

const EmptyRoom = (props) => {
    
    return (  <div>
         <h1>Empty Room</h1>
         <AddRoom/>
         <Badge className="fs-5 m-1">จำนวนห้องทั้งหมด : {props.stateFromStore.length}</Badge> 
        <div className="d-flex align-content-start flex-wrap">
            {props.stateFromStore.map((item) =>{
                console.log('item',item)
                return (
                    <div key={item.id} >
                    <RoomList data={item}></RoomList>
                  </div>
                )
            })}
        </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        stateFromStore : state.rooms
    }
}

export default connect(mapStateToProps,null)(EmptyRoom)
