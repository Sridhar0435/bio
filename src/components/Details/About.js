import React from "react";
import "../../css/About.css";
import web from "../../images/web.png";
import monitor from "../../images/moni.png";
import Zoom from 'react-reveal/Fade';
function About() {
    var trans = ".2s"

    return (
        <>
            <Zoom left cascade>
                <h3 className="expertis default_title_style">HERE ARE SOME OF MY EXPERTISE</h3> <br />
                <div className="mar_bot row">
                    <div className="col-sm-4 relt">
                        <img src={web} width="100px" alt="" />
                        <div className="card about_card" >
                            <div className="card-body">
                                <h5 className="card-title">Web Development</h5>
                                <p className="card-text">I have experience building websites and chrome extensions using React,Redux,Javascript,HTML,CSS.</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 relt">
                        <img src={monitor} width="100px" alt="" />
                        <div className="card about_card">
                            <div className="card-body">
                                <h5 className="card-title">DATA STRUCTURES & ALGORITHMS</h5>
                                <p className="card-text">I have good grasp over fundamental concepts of DSA.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </>
    )
}

export default About;