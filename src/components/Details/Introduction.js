import React from "react";
import "../../css/Introduction.css";
import dev6 from "../../images/dev6.jpeg";
import { useSpring, animated } from "react-spring";
import { Transition } from 'react-spring/renderprops'
import About from "./About";

function Introduction(props) {
    var trans = ".1s"
    console.log("sridharIntroduction")
    const animate = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transition: trans, transform: 'translateX(-40px)' },
    })

    const animateRight = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transition: trans, transform: 'translateX(+40px)' },
    })
    return (
        <section className="section_intro">
            <p className="a_u">ABOUT US</p>
            <animated.p className="default_title_style" style={animate}>WHO AM I ?</animated.p>
            <blockquote >I am just another random curious guy who happens to enjoy creating blogs, Now this is a place where i can share my stuff...</blockquote>
            <blockquote className="para1_h2">Its been covid-19 days just sitting at home, I was looking for something to kill time. finally ended up with a plan to create a portfolio website about myself, Its been a while i was planning to create it.</blockquote>

            <blockquote className="para2_h4">After searching the templates in the internet, came up with a good template idea wanted to design it from scratch using React.js</blockquote>
            <div>
                <blockquote>
                    I am a electronics gradudate student from B.I.E.T - (Ibrahimpatanam (M), Ranga Reddy, Hyderabad) with ECE as my major. I love exploring new technologies and often playing snookers
                </blockquote>
                <blockquote className="mar_bot">
                    I have started reflecting my ideas and thoughts through the medium of words recently so spelling and grammer mistaks are very often.You can write me back if you spot any mistake.
                 </blockquote>
            </div>
            <animated.p className="default_title_style" style={animate}>WHERE I'M FROM ?</animated.p>
            <blockquote className="mar_bot">
                I’m from Hyderabad <i className="fa fa-heart" aria-hidden="true"></i> ! The city of Biryani 😋
            </blockquote>
            <animated.p className="default_title_style" style={animate}>WHAT I DO ?</animated.p>
            <blockquote className="mar_bot">
                I’m working as Software Engineer Associate in Accenture (Hyderabad). have developed many website and apart from the I have been part of web design project, office work and as freelancer..
            </blockquote>
            <div>
                <About />
            </div>
            <div>

            </div>
        </section>
    )
}

export default Introduction;