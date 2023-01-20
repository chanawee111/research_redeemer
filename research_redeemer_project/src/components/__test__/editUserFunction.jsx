import React from 'react';
import { useParams } from 'react-router-dom';
import {connect} from 'react-redux';

const EditUserFunction = () => {
    const {id} = useParams();

    return ( 
        <div>
            {id}<br/>
            EditUserFunction 
        </div>
     );
}

const mapDispatchToProps=(dispatch)=>{
    return {
        editUserAtStore: (data) => {return dispatch(actions.editUser(data))}, 
    }
}
 
export default connect(null,mapDispatchToProps)(EditUserFunction);