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
import {Header,Contents,Sidebar,Footer} from '../layouts/public/Exporter';
import Header_Logo from '../assets/for-rent.png'
import QRLine from '../assets/QRLine.png';
import { Telephone,Envelope,Line,Facebook} from 'react-bootstrap-icons';



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

      const Descrip_Header = (
        <div className="py-5 text-light " style={{background:"#008BFF"}}> 
          <Row>
          <Col sm={12} className="col-md-3 d-flex justify-content-center py-4">
          <img src={Header_Logo} alt="Logo" style={{height:'20vh'}}></img>
          </Col>
          <Col className="col-md-9">
            <Row>
              <Col sm={12}>
           <div className="h3 pb-2 mb-4  border-bottom border-light"><li>เว็บไซต์อัพเดตสถานะว่างห้องพัก</li></div>
          <p>
            เว็บไซต์เช็คสถานะ อาจไม่ใช่สถานะล่าสุด **โปรดติดผู้ดูเเลหอพักเพื่อสอบถามข้อมูล
          </p>
              </Col>
              <Col sm>
          <Card className="d-inline-flex w-auto shadow">
            <Card.Body className="text-dark">
            <Telephone/> : 088-986-4842/090-658-3157 <br/>
            <Envelope/> : cosos41@hotmail.com<br/>
            <Line/> : <LineAccount /><br/>
            <Facebook/> : หอพักชูชัช
            </Card.Body>
          </Card>
            </Col>
            </Row>
          </Col>
          </Row>
        </div>
      )
      
      
        return (
            <div className="home">
              <Container className="bg-light border">
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