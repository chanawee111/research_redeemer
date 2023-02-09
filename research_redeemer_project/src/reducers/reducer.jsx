const initialState = {
    users : [],
    isLoading : false,
    error : {status:false,message:''},
    axiosError : {}
}

const reducer =(state = initialState,action)=>{
    const allUsers = [...state.users]
    switch(action.type){
        // case 'GET_ROOM':
        //     console.log('ID Payload:',action.payload)
        //     const indexForCalling = allStudents.find((item)=>{
        //         return item.id === action.payload
        //     })
        //     console.log("index in Reducer",indexForCalling)
        //     return indexForCalling
        // case 'DEL_ROOM':
        //     console.log('Del Function ACTIVATED DELETE :',action.payload)
        //     const newState = {
        //         ...state,
        //         rooms: state.rooms.filter(item => item.id !== action.payload)
        //    }
        //    return newState;

        // case 'ADD_ROOM':
        //     const addedState={
        //         ...state,
        //         rooms: [...state.rooms,action.payload]
        //    }
        //    return addedState;

        // case 'EDIT_ROOM':
        //     console.log('STEP1 -- EDIT_ROOM Function ACTIVATED :',action.payload)
        //     console.log('STEP1.1 -- EDIT_ROOM Function ACTIVATED :',action.payload)
        //     const indexForEdit = allRooms.findIndex((item) => {
        //         return item.id === action.payload.id
        //     })
        //     console.log('STEP2 -- EDIT_ROOM Function ACTIVATED :',indexForEdit ,'payload ID:',action.payload.id)
        //     allRooms[indexForEdit] ={
        //         id:action.payload.id,
        //         name: action.payload.name,
        //         status: action.payload.status
        //     }
        //     const editedState = {
        //         ... state,
        //         rooms : allRooms
        //     }
        //     return editedState
        case 'GET_USER_LISTS': //It Work
            console.log('GET USER LIST REDUCER WORKDED')
            const allUsersState = {
                ...state,
                users: action.payload
            }
            return allUsersState;
        case 'DEL_USER':
            const newState = {
                ...state,
                users: state.users.filter(item => item.id !== action.payload)
            }
            return newState;
        case 'ADD_USER':
            const addedState = {
                ...state,
                users : [action.payload], ...state.users
            }
            return addedState;
        case 'EDIT_USER':
            const indexForEdit = allUsers.findIndex(item => item.id === action.payload.id);
            console.log(`index ${indexForEdit} for edit`);

            allUsers[indexForEdit] = {
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email
            }

            const editedState = {
                ...state,
                users: allUsers
            }

            return editedState;

        case 'GET_USER':
            console.log('GET_USER Payload:',action.payload ,'Type of :',typeof(action.payload))
            const newGetUser = {
                ...state,
                users: action.payload
            }
            return newGetUser;
            
        case 'LOADING_START':
            console.log('LOADING START ACTIVATED');
            return {
                ...state,
                isLoading : true
            }
        case 'LOADING_END':
            console.log('LOADING END ACTIVATED');
            return{
                ...state,
                isLoading : false
            }
        case 'REASON_ERROR':
            console.log('READSON_ERROR ACTIVATED');
            return {
                ...state,
                error : action.payload
            }  
        case 'AXIOS_ERROR':
            console.log('AXIOS_ERROR ACTIVATED');
            return {
                ...state,
                axiosError : action.payload
            }

        default:
            break;
    }
    return state;
}

export default reducer;