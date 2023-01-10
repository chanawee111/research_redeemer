import React,{useState} from 'react';
import {Outlet} from 'react-router-dom';

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
            <Outlet/>
        </div>
    )
}

export default Contents;