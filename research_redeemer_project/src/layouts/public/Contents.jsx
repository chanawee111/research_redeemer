import React,{useState} from 'react';
import {Row,Col} from 'react-bootstrap'
import {Outlet} from 'react-router-dom';
import Room from '../../components/Home/Room'
import Tables from '../../components/Home/tables'
import RoomLayout from '../../components/Home/LayoutRoom'

const Contents =(props)=>{
 const [dataState,setDataState] = useState(
    {
        data : 0,
      coupons : {
        coupon1 : {
          secretWord: 'a12edqwf231df13fwfwcds1w11331f3d',
          status: true
        },
        coupon2 : {
          secretWord: '12ed1f3yuv3fyu2v3fuv23vf1uvfuvf1',
          status: true
    }
   } 
  }
  )
    return (
        <div> 
          
            <p className="fw-bold m-1">ตารางเเสดงสถานะ</p>
            <RoomLayout/>
            <Tables></Tables>
            <hr></hr>
            <Outlet/>
        </div>
    )
}

export default Contents;