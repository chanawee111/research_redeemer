import React ,{ useState } from 'react';
import {createStore} from 'redux';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import reducer from './reducers/reducer';
import  {Provider} from 'react-redux';
import './App.css'
import WithNav from './layouts/navbar_visitor/WithNav'
import WithoutNav from './layouts/navbar_visitor/WithoutNav';
import NavBar from "./components/Navbar/Navbar";
import Home from './pages/home';
import Login_Page from './pages/login_page';
import Register_Page from './pages/register_page';
import Edit_Room from './pages/__test__/displayRoom'
import Error404 from './pages/error404';

import EmptyRooms from './components/Home/homeComponents/empty_Room';
import NonEmptyRooms from './components/Home/homeComponents/nonEmpty_Room';


class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     data : 0,
  //     coupons : {
  //       coupon1 : {
  //         secretWord: 'a12edqwf231df13fwfwcds1w11331f3d',
  //         status: true
  //       },
  //       coupon2 : {
  //         secretWord: '12ed1f3yuv3fyu2v3fuv23vf1uvfuvf1',
  //         status: true
  //       }
  //     }
  //   }
  // }
  // increase(number){
  //   this.setState(prev => {
  //     return {
  //       data : prev.data + number
  //     }
  //   })
  // }

  // useCoupon(name_coupon){
  //   const updateCoupon = {... this.state.coupons}
  //   // console.log('Check :',updateCoupon[name_coupon])
  //   updateCoupon[name_coupon].status = false
  //   console.log('update Coupons status:',updateCoupon)
  //   this.setState(prevState => (
  //     {
  //       data : prevState.data,
  //       conpons : updateCoupon
  //     }
  //   ))
  //   console.log('Change value:',this.state)
  // }
  render() {
    const store = createStore(reducer);
    return (
      <Provider store={store}>
    <Router>
        <Routes>
          {/* <Route path="/" element={<Home/>}></Route>
          <Route path="login" element={<Login_Page/>}></Route>
          <Route path="*" element={<Error404/>}/> */}
          <Route element={<WithNav/>}>
            <Route path="/" element={<Home/>}>
              <Route path="empty_rooms" element={<EmptyRooms />}/>
              <Route path="nonempty_rooms" element={<NonEmptyRooms/>}/>
            </Route>
            <Route path="edit/:id" element={<Edit_Room/>}/>
            <Route path="*" element={<Error404/>}/>
          </Route>
          <Route element={<WithoutNav/>}>
            <Route path="login" element={<Login_Page/>}/>
            <Route path="register" element={<Register_Page/>}/>
          </Route>
        </Routes>
    </Router>
    </Provider>  
    )
  }
}

export default App
