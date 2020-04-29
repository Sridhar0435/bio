import React from "react";
import "../../css/About.css";
import web from "../../images/web.png";
import monitor from "../../images/moni.png";
import { animated, useSpring, useSprings, useChain } from "react-spring";

function About() {
    var trans = ".2s"
    const animate = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transition: trans, transform: 'translateY(+40px)' },
    })
    return (
        <>
            <h3 className="expertis default_title_style">HERE ARE SOME OF MY EXPERTISE</h3> <br />
            <div className="mar_bot row">
                <animated.div style={animate} className="col-sm-4 relt">
                    <img src={web} width="100px" alt="" />
                    <div className="card about_card" >
                        <div className="card-body">
                            <h5 className="card-title">Web Development</h5>
                            <p className="card-text">I have experience building websites and chrome extensions using React,Redux,Javascript,HTML,CSS.</p>

                        </div>
                    </div>
                </animated.div>

                <animated.div style={animate} className="col-sm-4 relt">
                    <img src={monitor} width="100px" alt="" />
                    <div className="card about_card">
                        <div className="card-body">
                            <h5 className="card-title">DATA STRUCTURES & ALGORITHMS</h5>
                            <p className="card-text">I have good grasp over fundamental concepts of DSA.</p>
                        </div>
                    </div>
                </animated.div>
            </div>
        </>
    )
}

export default About;