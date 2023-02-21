import React,{useEffect, useState} from 'react';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Swal from 'sweetalert2';
import {host,port} from '../../config/apiConfig';
import '../styles/style.css';

//import components
import AdminNavbar from '../../admin/components/AdminNavbar'


const Dashboard = () =>{
    const [name,setName] = useState('');
    const [token,setToken] = useState('');
    const [expire,setExpire] = useState('');
    const [authStatus,setAuthStatus] = useState(false);
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [errMessage,setErrorMessage] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
       refreshToken();
       getUsers(); 
    },[]);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    const LoadingBox = <div className="spinner-border" role="status">
             <span className="visually-hidden">Loading...</span>
                </div>
    
    
    const refreshToken = async () => {
        try{
            const response = undefined;
            response = await axios.get(`http://${host}:${port}/token`);
            console.log("Response From Server-Side:",response);
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp); 
            console.log("Decode",decoded)
            setAuthStatus(true);     
        }catch(err){ 
            setAuthStatus(false); 
            if(err){
                const errMesg = err
                console.log("!!!!Error Message:",errMesg)
                setErrorMessage(errMesg.response.data);
                console.log(errMessage);
                    
                Swal.fire({
                    grow:'fullscreen',
                    icon: 'error',
                    title: 'Oops...',
                    text: `Failure Error: ${errMesg.response.data}`,
                    footer: '<a href="">Why do I have this issue?</a>'
                  }).then(() => navigate("/login"));
                
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config)=>{
        const currentData = new Date();
        if(expire * 1000 < currentData.getTime()) {
            const response = await axios.get(`http://${host}:${port}/token`);
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (err)=>{
        return Promise.reject("err :",err);
    });

    const getUsers = async () => {
        setLoading(true);
        const response = await axiosJWT.get(`http://${host}:${port}/users`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
        setLoading(false);
    }

    const unAuthorization =(
          <h1>User Permission Denied</h1>  
    )

    return(
        <>
        <AdminNavbar userName={name} authStatus={authStatus}/>
        <Container>
        <div className="bg-white px-3 adminDashboard">
            <h1>Welcome Administrator : {name}{!authStatus?String(unAuthorization):null} </h1>
            <Table striped bordered hover>
      <thead>
      <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
      </thead>
      <tbody>
      {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
      </tbody>
    </Table>
    {loading?LoadingBox:null}
        </div>
        </Container>
        </>
    );
}
export default Dashboard;