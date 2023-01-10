import React from "react";
import {Card,Badge,Button
  } from 'react-bootstrap'

const Room = (props) => {
  function onCouponUse(event){
    console.log('onCouponUse Activated')
    props.setCoupon();
  }

  //const coupon_name = props.data
  const coupon_status = props.data.status;
  const coupon_secretWord = props.data.secretWord;
  //console.log('coupon_status:',coupon_status,'coupon_secretWord:',coupon_secretWord)
    return (
        <div style={{margin:"10px"}}>
        <Card style={{ width: '18rem' }}>
        <Card.Header>coupons</Card.Header>
        <Card.Body>
          <Card.Title>Secret Word</Card.Title>
          <Card.Text>
          <Badge bg="success">{coupon_status?coupon_secretWord:<Badge bg="danger">Key has redeemed</Badge>}</Badge>
          </Card.Text>
          <Button variant="warning" onClick={onCouponUse} disabled={!coupon_status}>Redeem</Button>
        </Card.Body>
      </Card>
        </div>
    )
}
export default Room ;