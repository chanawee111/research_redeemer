import React ,{ useState } from 'react';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
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

const midlewares = [thunk];
class App extends React.Component {
  render() {
    const store = createStore(reducer,applyMiddleware(...midlewares));
    return (
      <Provider store={store}>
    <Router>
        <Routes>
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
