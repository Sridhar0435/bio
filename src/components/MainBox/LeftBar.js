import React, { useState } from 'react';
import '../../css/LeftBar.css';
import { Link } from "react-router-dom";
import dev2 from "../../images/dev2cro.jpg";
import { Link as ScrollLick } from 'react-scroll'

function LeftBar() {



    const [toggle, setToggle] = useState(false);
    const sidebarToggle = () => {
        setToggle(!toggle);
        console.log(toggle)
    }
    return (
        <>
            {/* <span className="span_bar" onClick={sidebarToggle}>{toggle ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i>}</span> */}
            {toggle ? "" : <span className="span_bar" onClick={sidebarToggle}><i className="fa fa-bars" aria-hidden="true"></i></span>}

            <aside className={toggle ? "aside_left" : ""}>
                {toggle ? <span className="span_x" onClick={sidebarToggle}><i className="fa fa-times" aria-hidden="true"></i></span> : ""}
                <article className="left_bar_article">
                    <img className="rounded-circle img_left" alt="Cinque Terre" src={dev2} alt="dev1" />
                    <div className="details_div">
                        <header className="owner">Sridhar Achini</header>
                        <ul className="left_ul_first">
                            <li><i className="fa fa-envelope-o" aria-hidden="true"></i> ssri668@gmail.com</li>
                            <li><i className="fa fa-phone" aria-hidden="true"></i> +91 7799424686</li>
                        </ul>
                        {/* <hr /> */}
                        <ul className="left_ul_intro">
                            {/* <li><Link style={bg} to={"/"}> Introduction</Link></li>
                           
                            <li><Link to={"/projects"}> Projects</Link></li>
                            <li><Link to={"/blog"}> Blog</Link></li> */}
                            <li >
                                <ScrollLick
                                    activeClass="active"
                                    to="intro"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                    onClick={sidebarToggle}
                                >
                                    INTRODUCTION
                    </ScrollLick>
                            </li>

                            <li >
                                <ScrollLick
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    onClick={sidebarToggle}
                                >
                                    ABOUT
                    </ScrollLick>
                            </li>
                            <li >
                                <ScrollLick
                                    activeClass="active"
                                    to="timeline"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    onClick={sidebarToggle}
                                >
                                    PROJECTS
                    </ScrollLick>
                            </li>
                        </ul>
                        {/* <hr /> */}
                        <ul className="left_ul_socialMedia">
                            <li><a href="https://github.com/Sridhar0435" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="https://github.com/Sridhar0435" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="https://github.com/Sridhar0435" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="https://github.com/Sridhar0435" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                            <li><a href="https://github.com/Sridhar0435" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                        <p className="tit love">Made with <i className="fa fa-heart" aria-hidden="true"></i> thanks for the support <i className="fa fa-smile-o" aria-hidden="true"></i></p>
                        {/* <p className="tit thanks" >Thanks <i class="fa fa-smile-o" aria-hidden="true"></i> for the support!</p> */}
                        {/* colorlib */}
                    </div>
                </article>
            </aside>
        </>
    );
}

export default LeftBar;
