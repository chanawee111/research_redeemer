import axios from 'axios';
const host = "localhost";
const port ="3000";

export const getUserLists = () => { //It Work
    console.log('getUserLists Activated')
    return async (dispatch) => {
        try{
            dispatch({type:"LOADING_START"});
            const res = await axios.get(`http://${host}:${port}/api/users`);
            dispatch({type:'GET_USER_LISTS',payload:res.data})

        }catch(err){
            console.log('Fetch Data fail',err);
        }finally{
            console.log('getUserLists LOADING SUCCESSFULLY');
            dispatch({type:'LOADING_END'});
        }
    }
}

export const delUser = (id) =>{
    return async (dispatch) => {
        try{
            dispatch({type:"LOADING_START"});
            const res = await axios.delete(`http://${host}:${port}/api/users/${id}`);
            dispatch({type:"DEL_USER",payload: res.data.id});

        }catch(err){
            console.log("Delete User fail",err);
        }finally{
            dispatch({type:"LOADING_END"});
        }
    }
}

export const addUser = (data) => {
    return async (dispatch) => {
        try{
            dispatch({type:"LOADING_START"});
            const res = await axios.post(`http://${host}:${port}/api/user/`,data);
            dispatch({type:"ADD_USER",payload: res.data});
        }catch(err) {
            console.log("Add User fail",err);
        }finally{
            dispatch({type:"LOADING_END"});
        }
    }
}

export const editUser = (data) => {
    return async (dispatch) => {
        try{
            dispatch({type:"LOADING_START"});
            const res = await axios.put(`http://${host}:${port}/api/user/${data.id}`,data)
            dispatch({type:"EDIT_USER",payload:res.data})

        }catch(err){
            console.log("Edit user Fail",err);
        }finally {
            dispatch({type:"LOADING_END"});
        }
    }
}

export const getUser = (id) => {
    return async (dispatch) => {
        try{
            dispatch({type:"LOADING_START"});
            await axios.get(`http://${host}:${port}/api/user/${id}`);
            dispatch({type:"GET_USER",payload:id});

        }catch(err){
            console.log('Get user fail',err);
        }finally{
            dispatch({type:"LOADING_END"});
        }
    }
}

export  const TestExport = () => {
  
            console.log('f')
    
}
