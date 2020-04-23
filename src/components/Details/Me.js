import React from "react";
import "../../css/Me.css";
import dev1 from "../../images/dev1.jpeg"
function Me(props) {

    return (
        <div>
            {/* <section className="">
                <article className="img_section">
                    <div className="devtitle_img">
                        <h1 className="hi">HI!</h1>
                        <h1 className="name_dev">I'm Sridhar</h1>
                        <ul className="dots">
                            <li><a href="#hi"><i class="fa fa-circle" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </article>

            </section> */}

            <section>
                <article className="articleMe">
                    <img src={dev1} className="img_me_2" alt="" />
                    <div className="img_section_2">
                        <h1 className="hi">H!</h1>
                        <h1 className="name_dev">!'m Sridhar <i class="fa fa-heart" aria-hidden="true"></i></h1>
                        <h1 className="name_dev">Front End Developer</h1>
                        <ul className="dots">
                            <li><a href="#dot_first"><i class="fa fa-circle" aria-hidden="true"></i></a></li>
                            <li><a href="#dot_second"><i class="fa fa-circle" aria-hidden="true"></i></a></li>
                            <li><a href="#dot_third"><i class="fa fa-circle" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </article>
                <article>
                    <h1 id="dot_first">Sridhar HEllo</h1>
                    <h1 id="dot_second">Sridhar HEllo</h1>
                    <h1 id="dot_third">Sridhar HEllo</h1>
                </article>
            </section>

        </div>
    )
}

export default Me;