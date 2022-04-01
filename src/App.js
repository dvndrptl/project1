import './App.css';
import react from 'react';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Startpage from './strtpage/strt';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ForPass from './userpages/forgotpass';
import NewAcc from './userpages/newacc';
import MainStart from './homepage/mainStart';
import PopAttan from './employee/popAttan';
import Empl1 from './employee/emplper';
import Emplper from './employee/emplper';
import Theka from './employee/theka';
import context from 'react-bootstrap/esm/AccordionContext';


const Appcntxt = createContext()

export default function App() {
  const [page, setpage] = useState(<Startpage />)
  const [loginChange, setloginChange] = useState(1)



  useEffect(() => {
    if (localStorage.getItem("token") !== "undefined" && localStorage.getItem("token") !== null) {
      console.log("hello aya kya", localStorage.getItem("token"))
      setpage(<MainStart />)
      console.log("ansis", localStorage.getItem("token"))
    }
  }, [loginChange])



  return (
    <Appcntxt.Provider value={{ loginChange, setloginChange }}>

      <>
        <div >

          <BrowserRouter>
            <Routes>
              <Route path="/" element={page} />

              <Route path="/forggot" element={<ForPass />} />
              <Route path="/newacc" element={<NewAcc />} />
              <Route path="/home" element={<MainStart />} />
              <Route path="/pop-up" element={<PopAttan />} />
              {/* <Route path="/empl-whole" element={<Empl1/>}/> */}
              <Route path="/emplper" element={<Emplper />} />
              <Route path="/theka" element={<Theka />} />

            </Routes>

          </BrowserRouter>

        </div>
      </>
    </Appcntxt.Provider>
  );
}

export { Appcntxt }

