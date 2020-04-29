import React from "react";
import "../../css/Timeline.css"
import logo_c from "../../images/logo150px.png";
import Zoom from 'react-reveal/Fade';
function Timeline() {

    return (
        <section className="timeline">
            <Zoom bottom cascade>
                <p className="proj default_title_style ">Projects</p>
                <div className="row">
                    <div className="col-md-12">
                        <article className="art_icon">
                            <div className="icon_set"><i className="fa fa-pencil" aria-hidden="true"></i></div>
                            <div className="about_1 abo_arr_1">
                                <h5 className="pro_title">Cricklivescore.com <img src={logo_c} alt="" width="58px" /></h5>
                                <p>I have recently designed a sports news website <a className="webLink" href="https://cricklivescore.com/" target="_blank">www.cricklivescore.com</a> exclusively for the game of cricket. The site features news, articles, live coverage of cricket matches. </p>
                                <p>
                                    List of Technologies used to create this Application.
                                </p>
                                <ul className="list_tech">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>REACT</li>
                                    <li>REDUX</li>
                                    <li>JAVASCRIPT</li>
                                    <li>BOOTSTRAP 4</li>

                                </ul>
                                <p>
                                    Note: Please give your feedback in facebook, instagram or any other social media platforms, if you find any mistakes or errors in the site leave a message so that i can fix them, also give your suggestions to make it better which helps me a lot...
                            </p>
                            </div>
                        </article>

                        {/* <article className="art_icon">
                        <div className="icon_set"><i class="fa fa-pencil" aria-hidden="true"></i></div>
                        <div className="about_1 abo_arr_2">
                            <p >I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 75 During my time at school</p>
                        </div>
                    </article>
                    <article className="art_icon">
                        <div className="icon_set"><i class="fa fa-pencil" aria-hidden="true"></i></div>
                        <div className="about_1 abo_arr_3">
                            <h5>Primary and Higher Education</h5> <span>2006-2013</span>
                            <p >I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 75 merit. During my time at school,  </p>
                        </div>
                    </article> */}
                    </div>
                </div>
            </Zoom>
        </section>
    )
}

export default Timeline;