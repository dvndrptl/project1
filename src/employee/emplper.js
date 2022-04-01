import React from "react";
import Nav from "./nav";
// import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import { SplitButton } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { useState } from "react"
import { Form } from "react-bootstrap";

export default function Emplper() {
    const [perDayAtten, setperDayAtten] = useState(false)

    return (
        <Nav>
            <>
                <div className="font">

                    <Link to="/pop-up"><button className="btn btn-secondary  px-4 mx-5"><i className="fas fa-undo-alt"></i></button></Link>
                    <h2 className="d-inline mx-5">Name: <span></span></h2>
                    <div className="emplDataPer d-flex justify-content-around mt-5">
                        <div className="emplDataPer-l-parent">
                            <h3 className="text-center">Month:</h3>
                            <div className="emplDataPer-l d-flex ">
                                <div className="onlyAtan d-flex ">
                                    <div className="a" onClick={() => { setperDayAtten(!perDayAtten) }}>clck  </div>
                                    <div className="a"></div>
                                    <div className="a"></div>
                                    <div className="a"></div>
                                    <div className="a"></div>
                                    <div className="a"></div>
                                    <div className="a"></div>
                                    <div className="a"></div>
                                    <div className="a"></div>
                                    <div className="a"></div>
                                    <div className="a"></div>
                                    <div className="a"></div>

                                </div>
                                {perDayAtten &&
                                    <div className="fillIndiVidiAtten position-absolute">
                                        <button className="position-absolute cutbtnForFill" onClick={()=>{setperDayAtten(!perDayAtten)}}><i className="fas fa-times-circle "></i></button>
                                    <h4> Date:</h4>
                                    <div className="d-flex">
                                        <Form>
                                            {['checkbox'].map((type) => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label={`Present`}
                                                    />


                                                </div>
                                            ))}
                                        </Form>
                                        <Form.Control size="sm" type="number" placeholder="Given Money" />
                                        <Form.Select size="sm" className="border border-radius">
                                            <option>Full</option>
                                            <option>Half</option>
                                        </Form.Select>
                                    </div>
                                    <Form.Control size="sm" type="text" placeholder="Description    " />

                                    <button className="btn btn-success btn-sm mt-2 " onClick={()=>{setperDayAtten(!perDayAtten)}} > Save</button>


                                </div>
                                }


                                <div className="btn-group btn btn-secondary align-self-start my-5 mx-1">
                                    <button type="button" className="btn">Sort</button>
                                    <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item">  January </li>
                                        <li className="dropdown-item">  February </li>
                                        <li className="dropdown-item">  March </li>

                                    </ul>
                                </div>


                            </div>
                            <div className="emplDataPer-l-footer d-flex justify-content-around my-2" >
                                <button className="btn btn-primary"><i className="fas fa-chevron-circle-left"></i></button>
                                <button className="btn btn-success">OK</button>
                                <button className="btn btn-primary"><i className="fas fa-chevron-circle-right"></i></button>
                            </div>

                        </div>
                        <div className="emplDataPer-r">
                            <div className="attandaenceDes my-4">





                                <div className="sortbutAtten position-absolute top-5%  mr-5">
                                    {[DropdownButton].map((DropdownType, idx) => (
                                        <DropdownType
                                            as={ButtonGroup}
                                            key={idx}
                                            id={`dropdown-button-drop-${idx}`}
                                            size="sm"
                                            variant="secondary"
                                            title="Sort"
                                        >
                                            <Dropdown.Item eventKey="1">Month</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Week</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Year</Dropdown.Item>

                                        </DropdownType>
                                    ))}
                                </div>




                                <h3>total attendance</h3></div>
                            <div className="attandaenceDes my-4">

                                <div className="sortbutAtten position-absolute top-5%  mr-5">
                                    {[DropdownButton].map((DropdownType, idx) => (
                                        <DropdownType
                                            as={ButtonGroup}
                                            key={idx}
                                            id={`dropdown-button-drop-${idx}`}
                                            size="sm"
                                            variant="secondary"
                                            title="Sort"
                                        >
                                            <Dropdown.Item eventKey="1">Month</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Week</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Year</Dropdown.Item>

                                        </DropdownType>
                                    ))}
                                </div>

                                <h3>total Given money</h3></div>
                            <div className="attandaenceDes my-4">

                                <div className="sortbutAtten position-absolute top-5%  mr-5">
                                    {[DropdownButton].map((DropdownType, idx) => (
                                        <DropdownType
                                            as={ButtonGroup}
                                            key={idx}
                                            id={`dropdown-button-drop-${idx}`}
                                            size="sm"
                                            variant="secondary"
                                            title="Sort"
                                        >
                                            <Dropdown.Item eventKey="1">Month</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Week</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Year</Dropdown.Item>

                                        </DropdownType>
                                    ))}
                                </div>

                                <h3>How much money left according to attendance</h3></div>
                            <div className="attandaenceDes my-4"><h3>Rate per Attendance</h3></div>
                        </div>



                    </div>
                </div>


            </>
        </Nav>
    )
}