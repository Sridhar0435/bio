import React from "react";
import "../../css/Introduction.css";
import dev6 from "../../images/dev6.jpeg";
import About from "./About";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Introduction(props) {

    return (
        <Fade left cascade>
            <section className="section_intro">

                <Zoom left cascade><p className="a_u">ABOUT</p></Zoom>

                <Zoom left cascade><p className="default_title_style" >WHO AM I ?</p></Zoom>
                <blockquote >I am just another random curious guy who happens to enjoy creating blogs, Now this is a place where i can share my stuff...</blockquote>
                <blockquote className="para1_h2">Its been quarantine days just sitting at home, I was looking for something to kill time. finally ended up with a plan to create a portfolio website about myself, Its been a while i was planning to create it.</blockquote>

                <blockquote className="para2_h4">After searching the templates in the internet, came up with a good template idea wanted to design it from scratch using React.js</blockquote>
                <div>
                    <blockquote>
                        I am a electronics graduate student from B.I.E.T - (Ibrahimpatanam (M), Ranga Reddy, Hyderabad) with ECE as my major. I love exploring new technologies and often playing snookers
                </blockquote>
                    <blockquote className="mar_bot">
                        I have started reflecting my ideas and thoughts through the medium of words recently so spelling and grammer mistakes are very often.You can write me back if you spot any mistake.
                 </blockquote>
                </div>
                <Zoom left cascade><p className="default_title_style" >WHERE I'M FROM ?</p></Zoom>
                <blockquote className="mar_bot">
                    I’m from Hyderabad <i className="fa fa-heart" aria-hidden="true"></i> ! The city of Biryani 😋
            </blockquote>
                <Zoom left cascade><p className="default_title_style" >WHAT I DO ?</p></Zoom>
                <blockquote className="mar_bot">
                    I’m working as Software Engineer Associate in Accenture (Hyderabad).I have developed many websites & a apart from this I have been part of web design project, office work & as a freelancer..
            </blockquote>
                <div>
                    <About />
                </div>
            </section>
        </Fade >
    )
}

export default Introduction;