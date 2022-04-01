import react from "react"
import { useContext, useState } from "react"
import { subCtxt } from "../strt"
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { Appcntxt } from "../../App";
// import reactDom from "react-dom";
// import { FacebookLogin } from "react-facebook-login";
import  FacebookLogin  from "react-facebook-login";







export default function Login() {

    const appUse = useContext(Appcntxt)

    const google_client_ID = "673148954536-huv0243s1df9322kds69k3snkidf1qp9.apps.googleusercontent.com"
    // const google_secret_ID = "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"
    let Token_for_goo = ""

    const [user, setuser] = useState(false)
    const subCtaxt = useContext(subCtxt);
    const [userId, setuserId] = useState("")
    const [pass, setpass] = useState("")

    const { loginChange, setloginChange } = appUse



    useEffect(() => {
        // console.log(appUse)
        const token = localStorage.getItem("token")
        
        // console.log(loginChange, setloginChange)
    },[])

    const GoogleLiginSuccess = (data) => {
        Token_for_goo = data.tokenId
        axios.post("http://localhost:3005/login_google", { "tokenId": Token_for_goo }).then((res) => {
            // console.log("res aya kya", res.data.token)
            if (res.data.token != undefined) {
                console.log("hello")
                localStorage.setItem("token", res.data.token)
                setloginChange(loginChange + 1)
            }
        }).catch((e) => {
            console.log(e)
        })

        // console.log(Token_for_goo)
        // console.log(data)

    }
    const GoogleLoginFail = (data) => {
        console.log(data)
    }

    const handleClick = () => {
        axios.post("http://localhost:3005/login_", {
            "phone": userId,
            "password": pass
        }).then((e) => {
            // console.log("res", e.data)
            localStorage.setItem("token", e.data.tokenid)
            setloginChange(loginChange + 1)
        }).catch((e) => { console.log("error", e) })
    }




    const responseFacebook = (response) => {
        console.log(response);
    }



    const componentClicked = (res) => {
        console.log( "res aya kya", res)
    }


    return (
        <>
            <div className="font">
                <h1 className="heading">Welcome Madele Pariwar</h1>
                <div className="loginUser ">
                    <h2 className="user">Login</h2>



                    <h3 onClick={() => {
                        setuser(!user)
                    }} >Users</h3>
                    <br /> <br />
                    <div className="idpass">

                        <label>Username</label> <br />
                        <input type="text" placeholder="Username" onChange={(e) => { setuserId(e.target.value) }}  ></input> <br /><br />
                        <label>Password</label> <br />
                        <input type="password" placeholder="Password" onChange={(e) => { setpass(e.target.value) }} ></input> <button className="seepass"><i className="fas fa-eye"></i></button> <br />  <br />

                        <div className="facebookbut">
                        <FacebookLogin 
                            appId="677012073325719"
                            autoLoad={true}
                            // fields="name,email,picture"
                            onClick={componentClicked}
                            callback={responseFacebook}
                        />
                        </div>

                        <Link to="/home"><button className="gobut" onClick={handleClick}  >Go</button></Link>


                        <GoogleLogin
                            clientId={google_client_ID}
                            render={renderProps => (
                                <button className="goobut " onClick={renderProps.onClick} disabled={renderProps.disabled}>Login With Google</button>
                            )}
                            buttonText="Login With Google"
                            onSuccess={GoogleLiginSuccess}
                            onFailure={GoogleLoginFail}
                            cookiePolicy={'single_host_origin'}
                        />

                        <br />
                        <Link className="forgot" to="/forggot">Forgot Password?</Link> <br /><br />

                        {/* <p className="forgot"> Forgot Password?</p>   */}
                        <Link to="/newacc" className="forcreate"> Not have account? Create Acount</Link>


                    </div>
                    {user && <div className="foruser">
                        <h3><u>Users</u></h3>
                        <ol>

                        </ol>
                    </div>}

                </div>
            </div>

            {/* <Link to="/newacc">New acc</Link> */}
            {/* onClick={() => {
                            subCtaxt.setsubmit(!subCtaxt.submit)
                        }} */}


        </>
    )
}

// curl -i -X GET 
//  "https://graph.facebook.com/v13.0/me?fields=id%2Cname%2Cemail%2Cabout&access_token=EAAHRcRaWZCkcBAKOtI5CWsumHeEYZBu2Pl7E8eMyz8KsswaDXdnk7zlaNZBuAPR9S61hChQ15A2LtwuHXfUehXvCkq3FdfZCWe4bc71zs071vt4beQMVaSNDH61nXILwddQgqQoB8J7OieaANZAFjQiwUj9T151uUDyQr92AvL07nwf3XbDeZCntLGGSMAFpfMTzLIZCtIuRQLznylrv3uCcgtgcwUZAjBPfCERMctbh38ZBMLrZCWlZC61"