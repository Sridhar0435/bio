import React from "react";
import "../../css/Me.css";
import dev1 from "../../images/dev1.jpeg";
import Introduction from "./Introduction";
import Timeline from "./Timeline";
import { animated, useSpring, useSprings, useChain } from "react-spring";

function Me(props) {
    var trans = ".2s"
    const animate = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transition: trans, transform: 'translateX(-40px)' },
    })
    return (
        <>
            <section>
                <div id="intro" >
                    <article className="articleMe">
                        <img src={dev1} className="img_me_2" alt="" />
                        <div className="img_section_2">
                            <animated.h1 style={animate} className="hi">H!</animated.h1>
                            <animated.h1 style={animate} className="name_dev">!'m Sridhar <i className="fa fa-heart" aria-hidden="true"></i></animated.h1>
                            <animated.h1 style={animate} className="name_dev">Front End Developer</animated.h1>
                            <animated.ul style={animate} className="dots">
                                <li><a href="#dot_first"><i className="fa fa-circle" aria-hidden="true"></i></a></li>
                                <li><a href="#dot_second"><i className="fa fa-circle" aria-hidden="true"></i></a></li>
                                <li><a href="#dot_third"><i className="fa fa-circle" aria-hidden="true"></i></a></li>
                            </animated.ul>
                        </div>
                    </article>
                </div>
                <div id="about">
                    <Introduction />
                </div>
                <div id="timeline">
                    <Timeline />
                </div>

            </section>

        </>
    )
}

export default Me;