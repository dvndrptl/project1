import react from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";
import { useState } from "react";
export default function MainStart() {
    const [profile, setprofile] = useState(false)
    const [sendreq, setReq] = useState(false)
    const [userreq, setUserReq] = useState(false)
    return (
        <>
            <div className="mainfirst font">
                <h1>Home</h1>


                <div className="mainfirst-container">
                    <Link className=" homeprofile" to="" onClick={() => { setprofile(!profile) }} ><h2> Profile </h2></Link>
                    <Link className=" homeusers" to="" onClick={() => { setReq(!sendreq) }}><h2> Users </h2></Link>
                    <Link className=" homeusers" to="" onClick={() => { setUserReq(!userreq) }} ><h2> Request of Users </h2></Link>
                    <div className=" main-part ">
                        <Link className="link" to="/pop-up"><div className="main-part1">Employee</div></Link>
                        <Link className="link" to=""><div className="main-part2">Udhaar</div></Link>
                        <Link className="link" to=""><div className="main-part3">Vehicle</div></Link>
                    </div>
                    <div className="main-2-part">
                        <Link className="link" to=""><div className="main-part5">Work Plan</div></Link>
                        <Link className="link" to=""><div className="main-part4">  Pup-Up</div></Link>
                    </div>

                </div>

                {profile && <div className="profile-pop">
                    <h4 className="profileUsersHeading">Profile</h4>
                    <p> Name:-<br /><br />
                        Phone:-<br /><br />
                        E-mail:- </p>
                </div>}
                {sendreq && <div className="profile-pop2">
                    <h4 className="profileUsersHeading">Signed Users</h4>

                    <ol>
                        <li></li> <Button variant="primary">Send Request</Button>{' '}
                    </ol>
                </div>}
                {userreq && <div className="profile-pop3">
                    <h4 className="profileUsersHeading">Request By Users Users</h4>

                    <ol>
                        <li></li> <Button variant="primary">Allow</Button>{' '}
                    </ol>
                </div>}


            </div>

        </>
    )
}