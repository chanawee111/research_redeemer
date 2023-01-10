import React from "react";
//import Box from "./__test__/TestHOC"
//import {Outlet} from 'react-router-dom';
import '../styles/home_style.css';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import {Col,Row,Card} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { ExclamationCircleFill,Facebook} from 'react-bootstrap-icons';

import {Header,Contents,Sidebar,Footer} from '../layouts/public/Exporter';
import Header_Logo from '../assets/owl-wisdom.png'
import QRLine from '../assets/QRLine.png';
import TestAxios from '../components/__test__/testAxios'


class Home extends React.Component {
  state = {
    sidebar_status : false
  }
 
  handleClose = () => {this.setState({sidebar_status : false});console.log("Closed")}
  handleShow = () => {this.setState({sidebar_status : true});console.log("Showed")}
  // background: linear-gradient(to right,red 15%, yellow 15%);
    render() {

      const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Scan QR Code</Popover.Header>
          <Popover.Body>
            <img src={QRLine} style={{height:"15vh"}}></img>
          </Popover.Body>
        </Popover>
      );

      const LineAccount = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <a className="text-warning stretched-link">Manee001</a>
        </OverlayTrigger>
      );

      const headerWave = (
        <div style={{position:"relation",height:"16vh"}}>
          <svg viewBox="0 0 1440 320">
  <defs>
  <path id="sineWave" fill="gray" fillOpacity="0.3" d="M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160 V0 H0" />
  </defs>
  <use className="wave" href="#sineWave" />
  <use className="wave" x="-100%" href="#sineWave" />
  <use className="wave1" href="#sineWave" />
  <use className="wave1" x="-100%" href="#sineWave" />
  <use className="wave2" href="#sineWave" />
  <use className="wave2" x="-100%" href="#sineWave" />
</svg>

        </div>
      )
      const Header = ( 
        <div id='fullWidth'>
          <div style={{position:"absolute",padding:"2%",paddingTop:"6vh"}}>
            <Row>
              <Col sm={6}>
              <img src={Header_Logo} className="img-fluid " alt="Logo" style={{height:'14vh',maxWidth:"auto"}}></img>
              </Col>
              <Col sm={6} className="w-100">
              <h1 style={{textShadow:'4px 4px #bfc0c1',borderTopStyle:"solid",borderWidth:"5px",marginTop:"-2px"}}>Wisdom of Mankind</h1>
              </Col>
            </Row> 
          </div>
          {headerWave}
        </div>
      )

      const Descrip_Header = (
        <div className="py-5" > 
          <Row>
          <Col sm={6}>
            <Row>
              <Col sm="auto">
           <div className="h3 pb-2 mb-4  text-danger border-bottom border-danger" >
            <li>เว็บไซต์ตรวจสอบวิจัยจากผู้เชี่ยวชาญ</li>
           </div>
          <p className="fst-italic bg-light text-dark p-3 rounded">
          การตรวจสอบการวิจัย (Audit) เป็นการประกันคุณภาพโครงการวิจัยยังดำเนินการอยู่หรือเสร็จสิ้นแล้ว เพื่อให้แน่ใจว่า การดำเนินกิจกรรมวิจัยเป็นไปตามหลัก GCP โดยการตรวจสอบกิจกรรมต่างๆ ที่เกี่ยวข้องกับการวิจัย ตลอดจนเอกสารอย่างเป็นระบบ ที่สถาบันหรือผู้ให้ทุนจัดทำเพียง 1 ครั้งต่อ 1 โครงการวิจัย
          </p>
              </Col>

              <Col sm={12}>
          <Card className="d-inline-flex w-auto shadow m-1">
            <Card.Body className="text-dark">
              <h5>การตรวจสอบการวิจัย (Audit)</h5>
            <p>
            ใครเป็นคนมาตรวจสอบ?
            ผู้ให้ทุนสนับสนุนจัดให้มีการตรวจสอบโครงการวิจัยโดยการจ้าง ผู้ตรวจสอบ (Auditor) ที่เป็นบุคคลอิสระไม่เกี่ยวข้องกับการวิจัย มีคุณสมบัติเหมาะสมโดยผ่านการอบรมและมีประสบการณ์ที่จะปฏิบัติงานการตรวจสอบการวิจัยอย่างถูกต้อง มีเอกสารบันทึกคุณสมบัติของผู้ตรวจสอบการวิจัยเป็นหลักฐาน
            </p>
            </Card.Body>
          </Card>
            </Col>

            <Col sm={12}>
          <Card className="d-inline-flex w-auto shadow m-1 h-100">
            <Card.Body className="text-dark">
              
              <h5><ExclamationCircleFill/> วิธีดำเนินการตรวจสอบการวิจัย?</h5>
            <p> 
            ใครเป็นคนมาตรวจสอบ?
            ในการตรวจสอบจะมีแผนการและวิธีดำเนินในการตรวจสอบโครงการวิจัยอย่างเป็นลายลักษณ์อักษรจากผู้ให้ทุนว่า จะตรวจสอบอะไร ตรวจสอบอย่างไร ตรวจสอบบ่อยแค่ไหน รูปแบบ รวมทั้งเนื้อหาของรายงานการตรวจสอบเป็นอย่างไร โดยกำหนดตามความสำคัญของการวิจัยจาก จำนวนอาสาสมัครที่เข้าร่วมการวิจัย, ประเภทและความซับซ้อนของการวิจัย, ระดับความเสี่ยงที่จะมีต่ออาสาสมัครในการวิจัย, และปัญหาต่างๆที่เกิดขึ้น
            </p>
            </Card.Body>
          </Card>
            </Col>

            </Row>
          </Col>
          <Col sm={6}>
            <Col sm={12} className="h-100">
            <Card className="shadow m-1" style={{height:"100%"}}>
              <Card.Header>ข้อบัญญัติ</Card.Header>
            <Card.Body className="text-dark">
            <TestAxios/>
            </Card.Body>
          </Card>
            </Col>
          </Col>

          </Row>
        </div>
      )
      
        return (
            <div className="home">
              <Container className="bg-light border">
              <section>
                {Header}
              </section>
            {/* <header className="footer">
               <Header></Header>
            </header>   */}
              

              <section>
             <div className="row">
              {Descrip_Header}
            </div> 
            </section>

            <section>
            <div className="wrapper d-flex flex-column border-top border-left" style={{minHeight: 'calc(100vh - 24px)'}}>
              <section className="main d-flex flex-grow-1">
                <div className="container-fluid">
                  <div className="row" style={{height: '100%'}}>
                     <div className="col col-md-2">
                      <div className="menu" style={{marginTop: '10px'}}>
                        <div className="row">
                        <Sidebar></Sidebar>
                        </div>
                      </div>
                    </div> 
                    <div className="col col-md-10">
                      {/* <Button onClick={this.handleShow} style={{marginTop: '10px'}}>ตัวเลือก</Button>
                      <Offcanvas show={this.state.sidebar_status} onHide={this.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>ตัวเลือก</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
                      <div className="text">
                        <Contents></Contents>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            </section>
            </Container>
            
            <section>
            <footer className="footer border-top bg-white">       
              <Container>
                <Footer></Footer>
              </Container>
              </footer>
              </section>
          </div>
          
        )
    }
}
export default Home ;