import React, { useState } from 'react';
import '../../css/LeftBar.css';
import { Link } from "react-router-dom";
import dev2 from "../../images/dev2cro.jpg";
function LeftBar() {
    const [toggle, setToggle] = useState(false);
    const sidebarToggle = () => {
        setToggle(!toggle);
        console.log(toggle)
    }

    return (
        <>
            <span className="span_bar" onClick={sidebarToggle}>{toggle ? <i class="fa fa-chevron-left" aria-hidden="true"></i> : <i class="fa fa-chevron-right" aria-hidden="true"></i>}</span>
            <aside className={toggle ? "aside_left" : ""}>
                <article className="left_bar_article">
                    <Link to={"/me"}> <img className="rounded-circle img_left" alt="Cinque Terre" src={dev2} alt="dev1" /> </Link>
                    <div className="details_div">
                        <header className="owner">Sridhar Achini</header>
                        <ul className="left_ul_first">
                            <li><i className="fa fa-envelope-o" aria-hidden="true"></i> ssri668@gmail.com</li>
                            <li><i className="fa fa-phone" aria-hidden="true"></i> +91 7799424686</li>
                        </ul>
                        {/* <hr /> */}
                        <ul className="left_ul_intro">
                            <li><Link to={"/"}> Introduction</Link></li>
                            {/* <li><Link to={"/about"}> About</Link></li> */}
                            <li><Link to={"/projects"}> Projects</Link></li>
                            <li><Link to={"/blog"}> Blog</Link></li>
                        </ul>
                        {/* <hr /> */}
                        <ul className="left_ul_socialMedia">
                            <li><a href="https://github.com/Sridhar0435" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="https://github.com/Sridhar0435" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="https://github.com/Sridhar0435" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="https://github.com/Sridhar0435" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                            <li><a href="https://github.com/Sridhar0435" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                        <p className="tit love">Made with <i class="fa fa-heart" aria-hidden="true"></i> thanks for the support <i class="fa fa-smile-o" aria-hidden="true"></i></p>
                        {/* <p className="tit thanks" >Thanks <i class="fa fa-smile-o" aria-hidden="true"></i> for the support!</p> */}
                        {/* colorlib */}
                    </div>
                </article>
            </aside>
        </>
    );
}

export default LeftBar;
