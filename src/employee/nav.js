import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { useContext } from "react";
import { Appcntxt } from "../App";



export default function Nav({ children }) {

    const appCnToNav= useContext(Appcntxt)
    const {loginChange, setloginChange}= appCnToNav

const deletelocalStorage = ()=>{
    localStorage.removeItem("token");
    setloginChange(loginChange+1)
}

    return (
        <>

            <div className="navmain d-flex justify-content-between mx-5 my-3 font">
                <Link to="/home"><Button variant="info" size="lg" className="fw-bold" > <i className="fas fa-home"></i> Home</Button> </Link>
                <Link to="/"><Button variant="info" size="lg" className="fw-bold" onClick={deletelocalStorage}>  LogOut <i className="fas fa-sign-out-alt"></i></Button>{' '}</Link>

            </div>


            {children}
            {console.log("childre aya", children)}
        </>
    )
}