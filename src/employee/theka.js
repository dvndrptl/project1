import React from 'react';
import Nav from './nav';
import { Link } from 'react-router-dom';
import { useState } from 'react';




export default function Theka() {
    const [ThekaDes, setThekaDes] = useState(false)
    const [ThekaGalla, setThekaGalla] = useState(false)
    const [ThekaMoney, setThekaMoney] = useState(false)
    
    const [ThekaDura, setThekaDura] = useState(false)





    return (
        <Nav>

            <div className='d-flex justify-content-between'>
                <div className=' d-flex '>
                    <div>
                        <Link to="/pop-up"><button className="btn btn-secondary  px-4 mx-5"><i className="fas fa-undo-alt"></i></button></Link>
                    </div>
                    <div className="dropdown thekaChooseEmpl ">
                        <button className="btn btn-lg btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Choose Employee
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <Link className="link" to=""><li className="dropdown-item">1</li></Link>
                            <li className="dropdown-item">2</li>
                            <li className="dropdown-item">3</li>
                        </ul>
                    </div>



                </div>
                <div className='individualTheka'>
                    <div className='thekaDescription' onClick={()=>{setThekaDes(!ThekaDes)}}><h3>Theka Description</h3><br /> <span>
                        
                        </span> </div>
                    { ThekaDes && <div className='setDescription position-absolute'>
                    <input  type="text" />
                    <button className='btn btn-success btn-sm position-absolute'>set</button>
                    </div>} 






                    <div className='thekaGalla' onClick={()=>{setThekaGalla(!ThekaGalla)}}><h3> Galla</h3><br /> <span>
                        
                        </span> </div>
                    { ThekaGalla  &&
                        <div className='setGalla position-absolute'>
                        <input  type="text" />
                        <button className='btn btn-success btn-sm position-absolute'>set</button>
                        </div>
                    }





                    <div className='money' onClick={()=>{setThekaMoney(!ThekaMoney)}} ><h3>Money</h3><br /> <span>
                        
                        </span> </div>
                    { ThekaMoney &&
                        <div className='setMoney position-absolute'>
                        <input  type="text" />
                        <button className='btn btn-success btn-sm position-absolute'>set</button>
                        </div>
                    }




                    <div className='duration' onClick={()=>{setThekaDura(!ThekaDura)}}><h3>Duration</h3><br /> <span>
                        
                        </span>     </div>
                    {ThekaDura  &&
                        <div className='setDuration  position-absolute'>
                        <input  type="text"  />
                        <button className='btn btn-success btn-sm position-absolute'>set</button>
                    </div>

                    }
                </div>
            </div>
            <button className='buttonForFinishTheka btn btn-secondary btn-lg position-absolute'>Finish</button>


        </Nav>
    )
}
