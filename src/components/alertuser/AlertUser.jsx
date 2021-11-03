import React from "react";

function AlertUser(){
    const alertwindow = () =>{
        alert("devCodeCamp")
    }
    return(
           <button onClick={alertwindow}> Click Me </button>

    )
}

export default AlertUser