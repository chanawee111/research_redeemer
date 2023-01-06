const initialState ={
    rooms : [
        {id: 1 ,name : 'Chanawee',status : true},
        {id: 2 ,name : 'Yowsd',status : false},
        {id: 3 ,name : 'Towor',status : true},
        {id: 4 ,name : 'Wfgbvc',status : true},
        {id: 5 ,name : 'Chanon',status : false},
        {id: 6 ,name : 'Fower',status :true}
      ]
}
const reducer =(state = initialState,action)=>{
    const allRooms = [...state.rooms]
    switch(action.type){
        // case 'GET_ROOM':
        //     console.log('ID Payload:',action.payload)
        //     const indexForCalling = allStudents.find((item)=>{
        //         return item.id === action.payload
        //     })
        //     console.log("index in Reducer",indexForCalling)
        //     return indexForCalling
        case 'DEL_ROOM':
            console.log('Del Function ACTIVATED DELETE :',action.payload)
            const newState = {
                ...state,
                rooms: state.rooms.filter(item => item.id !== action.payload)
           }
           return newState;

        case 'ADD_ROOM':
            const addedState={
                ...state,
                rooms: [...state.rooms,action.payload]
           }
           return addedState;

        case 'EDIT_ROOM':
            console.log('STEP1 -- EDIT_ROOM Function ACTIVATED :',action.payload)
            console.log('STEP1.1 -- EDIT_ROOM Function ACTIVATED :',action.payload)
            const indexForEdit = allRooms.findIndex((item) => {
                return item.id === action.payload.id
            })
            console.log('STEP2 -- EDIT_ROOM Function ACTIVATED :',indexForEdit ,'payload ID:',action.payload.id)
            allRooms[indexForEdit] ={
                id:action.payload.id,
                name: action.payload.name,
                status: action.payload.status
            }
            const editedState = {
                ... state,
                rooms : allRooms
            }
            return editedState
        default:
            break;
    }
    return state;
}

export default reducer;