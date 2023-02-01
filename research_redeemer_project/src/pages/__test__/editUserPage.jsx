import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../middleware/action'
import Spinner from 'react-bootstrap/Spinner';
import {Container,Row,Col} from 'react-bootstrap';

import withRouter from '../../components/__test__/withRouter';
import EditUserFunction from '../../components/__test__/editUserFunction'

class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.params.id,
            name: '',
            email: ''
        }
    }
    componentDidMount() {
        this.props.getUserFromStore(this.state.id)
    }

    render() {
        let editDataHTML = null;
        let loadingHTML = null;
        let errorHTML = null;

        const userData = this.props.StateFromStore.users[0];
        //console.log("----------------StateFromStore:",this.props.StateFromStore.error.status)

        if(userData === undefined) {
            console.log("userData undefined");
        }else{
            console.log("userData is not undefined Data payload:",userData);
            const dataPayload = userData
            editDataHTML = (<div>
                <EditUserFunction userData={userData} />
            </div>)
            console.log("Data Payload :",dataPayload);
        }
        if(this.props.StateFromStore.isLoading === true){
            loadingHTML = (<div>
                 <Spinner animation="grow" />  loading...
                
            </div>)
        }
        if(this.props.StateFromStore.error.status === true){
            editDataHTML = (<div>
                Error Reason :
                {this.props.StateFromStore.error.message} 
                {console.log("!!!!!!!!!Error AXIOS ERROR,", this.props.StateFromStore.axiosError)}<br/>
                {JSON.stringify(this.props.StateFromStore.axiosError)}
            </div>)
        }


        return ( 
            <div style={{paddingTop:'9vh',height:'100vh'}} className="bg-white">
                 <Row className="justify-content-md-center">
                <Col sm md xs lg="auto">
                 <Container>
                 {editDataHTML}
                 {loadingHTML}
                 </Container>
                 </Col>
                 </Row>
            </div>
         );
    }
}
const mapStateToProps=(state)=>{
    return{
        StateFromStore : state
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getUserFromStore: (id) => {return dispatch(actions.getUser(id))}
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(EditUser));

//import EditUserFunction from '../../components/__test__/editUserFunction'

// const EditUser = (props) => {
//     const [userData,setUserData] = useState({
//         id:'',
//         name: '',
//         email: ''
//     });
//     const {id} = useParams(); 
//     let data = {users:[],isLoading:true}
//     console.log("-----Data :",data)
//     useEffect(() => {   
//         props.getUserFromStore(id);
//         data = props.StateFromStore
//         setUserData({
//             id: 'loading Failed',
//             name: 'loading Failed',
//             email: 'loading Failed'
//         }
//         )
//     },[])

//     let editContent = null
//     let loading = null
    

//     if(data !== undefined) {
//         editContent = (<div>
//             {id}<br/>
//             Have Data<br/>
//             {JSON.stringify(userData)}<br/>
//             {JSON.stringify(data)}<br/>
//             {/* {data.users[0].id}<br/>
//             {data.users[0].name}<br/>
//             {data.users[0].email}<br/> */}
//             </div>)
//     }else{
//         editContent = (<div>
//             No Data
//         </div>)
//     }

//     if(data.isLoading === true){
//         loading = <div>
//             <Spinner animation="grow" />;
//         </div>
//     }
//     if(data.isLoading === false) {
//         loading = <div>
//         </div>
//     }
    
    

//     return ( 
//         <div style={{paddingTop:'8vh',height:'100vh'}} className="bg-white">
//             <Container>
//             <h1>Edit page</h1>
//             {editContent}
//             {loading}
//             <div className="mx-3 mb-3 fw-light">
//           <a href="/empty_rooms">-->Go home</a>
//         </div>
//         </Container>
//         </div>
//      );
// }

// const mapStateToProps=(state)=>{
//     return {
//         StateFromStore : state
//     }
// }

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         editUserAtStore: (data) => {return dispatch(actions.editUser(data))},
//         getUserFromStore: (id) => {return dispatch(actions.getUser(id))}
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(EditUser);