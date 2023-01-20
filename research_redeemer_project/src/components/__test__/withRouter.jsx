import React from 'react';
import {useParams} from 'react-router-dom';
import {Card} from 'react-bootstrap';


const withRouter = WrappedComponent => props => {
    const params = useParams();
    return(
        <WrappedComponent
        {...props}
        params={params}
        />
    )
}
export default withRouter;