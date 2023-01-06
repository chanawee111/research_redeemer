import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Sidebar = (props) => {
    return (
        <div> 
       
      {/* <Link to='/' className='d-grid gap-2 text-decoration-none'>
      <Button variant="success border" size="lg" style={{fontSize:"15px"}}>
        สถานะห้องทั้งหมด
      </Button>
      </Link> */}

      <Link to='empty_rooms' className='d-grid gap-2 text-decoration-none'>
        <Button variant="success border" size="lg" style={{fontSize:"15px"}}>
      ห้องที่ว่าง
      </Button>
      </Link>

      <Link to='nonempty_rooms' className='d-grid gap-2 text-decoration-none'>
      <Button variant="danger border" size="lg" style={{fontSize:"15px"}}>
        ห้องที่ไม่ว่าง
      </Button>   
      </Link> 
   
    </div>
    )
}
export default Sidebar;