import React from 'react';
import {connect} from 'react-redux';
import Table from 'react-bootstrap/Table';

const Tables =(props) => {
  const valueFromStore = props.stateFromStore
    return (
        <div style={{margin: '5px'}}>
            <Table striped bordered hover className="bg-light">
      <thead>
        <tr>
          <th>#</th>
          <th>ชื่อผู้เช่า</th>
          <th>สถานะ</th>
        </tr>
      </thead>
      <tbody>
      {valueFromStore.map((item)=>{
        return(
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.status?"ว่าง":"ไม่ว่าง"}</td>
         </tr>
        )
      })}
      </tbody>
        </Table>
        </div>
    )
}
const mapStateToProps = (state)=>{
  return {
      stateFromStore : state.rooms
  }
}

export default connect(mapStateToProps,null)(Tables);