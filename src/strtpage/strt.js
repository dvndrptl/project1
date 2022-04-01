import react from "react";
import Login from "./loginpage/login";
import { useState, useEffect , createContext } from "react";

const subCtxt= createContext();
export default function Startpage(props) {
    const [submit, setsubmit] = useState(true)

    return (
       <subCtxt.Provider value={{submit, setsubmit}}>
         <>
         {submit && <Login/>}
         {console.log(submit)}
        </>
       </subCtxt.Provider>
    )
}
export {subCtxt}