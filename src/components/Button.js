import React from 'react';

function Button(props){
    const onUserClick = () =>{
        console.log("Hiciste click en ")
        props.onClick && props.onClick()
    }
    //no es recomendable el uso de <> y </> para esto 
    return(
        <React.Fragment>
            <button onClick={onUserClick} className={"shadow-lg roundend-0 btn btn-"+props.color}>
                {props.children}
            </button>
        </React.Fragment>
    )
}
export default Button