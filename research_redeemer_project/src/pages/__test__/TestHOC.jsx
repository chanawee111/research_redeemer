import React from 'react';
const Box = (WrappedComponent,param) =>{
    return (props) => {
        return(
            <div>
                <h1>{param}</h1>
                <WrappedComponent/>
            </div>
        )
    }
}
export default Box;