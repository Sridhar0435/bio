import React from "react";
import "../../css/Me.css";
import dev1 from "../../images/dev1.jpeg";
import Introduction from "./Introduction";
import Timeline from "./Timeline";
import Zoom from 'react-reveal/Zoom';

function Me(props) {
    return (
        <>
            <section>
                <div id="intro" >
                    <article className="articleMe">
                        <img src={dev1} className="img_me_2" alt="" />
                        <Zoom left cascade>
                            <div className="img_section_2">
                                <h1 className="hi">H!</h1>
                                <h1 className="name_dev"> !'m Sridhar <i className="fa fa-heart" aria-hidden="true"></i></h1>
                                <h1 className="name_dev">Front End Developer</h1>
                                <ul className="dots">
                                    <li><a href="#dot_first"><i className="fa fa-circle" aria-hidden="true"></i></a></li>
                                    <li><a href="#dot_second"><i className="fa fa-circle" aria-hidden="true"></i></a></li>
                                    <li><a href="#dot_third"><i className="fa fa-circle" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </Zoom>

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