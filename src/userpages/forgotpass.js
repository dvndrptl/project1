import react from "react";
import { Link } from "react-router-dom";

export default function ForPass(){
    return(
        <>
        <div className="font main">
                <h1 className="heading">Welcome Madele Pariwar</h1>
                <div className="loginUser ">
                    <h2 className="user">Create New Password</h2> 
                    <br /> <br />
                    <div className="idpass">
                    <label>Phone/Email</label> <br />
                        <input type="text" placeholder="Phone/Email"  ></input> <br /><br /><label>OTP</label> <br />
                        <input type="text" placeholder="OTP"  ></input> <button className="seepass"><i>Send OTP</i></button> <br /><br />
                        <label>New Password</label> <br />
                        <input type="text" placeholder="New Password"  ></input> <br /><br />
                        <label>Confirm Password</label> <br />
                        <input type="password" placeholder="Confirm Password"></input> <button className="seepass"><i className="fas fa-eye"></i></button> <br />  <br />
                        <Link to="/"><button className="gobut" >Go</button></Link><br /> <br />
                        

                    </div>
                    

                </div>
            </div>
        {/* <Link to="/"> button</Link> */}
        </>
    )
}