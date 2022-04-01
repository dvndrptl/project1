import React from "react";
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";
// import DropdownButton from 'react-bootstrap/DropdownButton';
import { Dropdown } from "bootstrap";

export default function PopAttan() {
    const [clsbtn, setClsbtn] = useState(true)
    return (
        <> <Nav>

            <div className="font">



                {clsbtn && <div className="pop-up-mainpage1" >
                    <div className="pop-up-attan">
                        <h2> Today's Attendance</h2><CloseButton className="close-pop-up" onClick={() => { setClsbtn(!clsbtn) }} />
                        <h2>Date:</h2>
                        <ul className="pop-up-attan-margin">
                            <li><span></span><select>
                                <option>Full</option>
                                <option>Half</option>
                            </select>  Present: <input className="check" type="checkbox" value="present" ></input> </li>
                        </ul>
                        <Link to="/pop-up" onClick={() => { setClsbtn(!clsbtn) }}><Button className="pop-up-attan-margin" variant="success">Submit</Button>{' '}</Link>
                    </div>
                </div>
                }
            </div>
            <div className="font">
                <div>
                    <div className="fstchooseemp d-flex justify-content-between ">
                        <div className="d-flex">
                            <div className="dropdown  ">
                                <button className="btn btn-lg btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Choose Employee
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <Link className="link" to="/emplper"><li className="dropdown-item">1</li></Link>
                                    <li className="dropdown-item">2</li>
                                    <li className="dropdown-item">3</li>
                                </ul>
                            </div>
                            {/* <Link className="mx-3 " to=""></Link> */}
                            <p className="mx-3">
                                <a className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Add Employee +</a>

                            </p>
                            <div className="row add ">
                                <div className="col-5">
                                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                                        <div className="card card-body">
                                            <div className="row">
                                <h4>Add Employee</h4>

                                                <div className="col">
                                                    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                                                </div>
                                                 </div>
                                                 <div className="row mt-2">
                                                <div className="col">
                                                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                                                </div>
                                                </div>
                                                <div className="row mt-2">
                                                <div className="col">
                                                    <input type="text" className="form-control" placeholder="Village" aria-label="Last name"/>
                                                </div>
                                                </div>
                                                <button type="button" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"   className="btn btn-success mt-3  btn-sm">Add  </button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <Link className="olddata" to=""><button type="button" className="btn btn-secondary btn-sm ">Old Data</button></Link>


                    </div>
                    <div className="fstalldetail d-flex flex-column pr-5 ">

                        <Link className="link text-center fw-bold" to=""><div className="totalThekaMoney p-2 "><h3>TOTAL GIVEN</h3></div></Link>
                        <Link className="link text-center fw-bold" to=""><div className="totalThekaMoney p-2 "><h3>Theka in Money</h3></div></Link>
                        <Link className="link text-center fw-bold" to=""><div className="totalThekaMoney p-2 "><h3>Theka Grains</h3></div></Link>
                        <Link className="" to="/theka"><button type="button" className="btn btn-secondary p-4 btn-sm ">Theka Individual</button></Link>


                    </div>

                </div>


            </div>


        </Nav>
        </>
    )
}



