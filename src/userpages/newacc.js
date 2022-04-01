import react from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";







export default function NewAcc(){

    const [name, setname]= useState("")
    const [password, setpassword]= useState("")
    const [phone, setphone]= useState("")


 



    const handleClick = (event)=>{
        axios.post("http://localhost:3005/createAcc", {
    
            "name":name,
            "phone":phone,
            "password":password
        }
        ).then((e)=>{
            console.log(e)
        }).catch((er)=>{
            console.log(er);
        })
        
    }
    
   





    return(
        <>
        <div className="font main">
                <h1 className="heading">Welcome Madele Pariwar</h1>
                <div className="loginUser ">
                    <h2 className="user">Create New Password</h2> 
                    <br /> <br />
                    <div className="idpass">
                    <label>Full Name</label> <br />
                        <input type="text" placeholder="Full Name" onChange={(e)=>{setname(e.target.value)}} ></input> <br /><br /><label>Phone/Email</label> <br />
                        <input type="text" placeholder="Phone/Email" onChange={(e)=>{setphone(e.target.value)}} ></input> <button className="seepass"><i>Send OTP</i></button> <br /><br />
                        <label>OTP</label> <br />
                        <input type="text" placeholder="OTP"  ></input> <br /><br />
                        <label>Create Password</label> <br />
                        <input type="password" placeholder="Create Password" onChange={(e)=>{setpassword(e.target.value)}} ></input> <button className="seepass"><i className="fas fa-eye"></i></button> <br />  <br />
                        <Link to="/"><button className="gobut" onClick={handleClick} >Go</button></Link><br /> <br />
                        

                    </div>
                    

                </div>
            </div>
        {/* <Link to="/" >button</Link> */}
        </>
    )
}