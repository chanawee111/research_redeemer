import React,{useEffect, useState} from 'react';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import {host,port} from '../../config/apiConfig';
import '../styles/style.css';

//import components
import AdminNavbar from '../../admin/components/AdminNavbar'


const Dashboard = () =>{
    const [name,setName] = useState('');
    const [token,setToken] = useState('');
    const [expire,setExpire] = useState('');
    const [users,setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
       refreshToken();
       getUsers(); 
    },[]);

    const refreshToken = async () => {
        try{
            const response = await axios.get(`http://${host}:${port}/token`);
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }catch(err){
            if(err.response){
                navigate("/");
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
        return Promise.reject(err)
    });

    const getUsers = async () => {
        const response = await axiosJWT.get(`http://${host}:${port}/users`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    return(
        <>
        <AdminNavbar userName={name} />
        <Container>
        <div className="bg-white px-3 adminDashboard">
            <h1>Welcome Administrator : {name} </h1>
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
        </div>
        </Container>
        </>
    );
}
export default Dashboard;