import React from "react";
import "../../css/Introduction.css";
function Introduction(props) {

    console.log(props.location.search)
    console.log("sridharIntroduction")
    return (
        <section className="section_intro">
            {/* <h4>It's been a while i was thinking about to make a porfolio finally it is here.. </h4> */}
            <h2>I am just another random curious guy who happens to enjoy creating blogs, Now this is a place where i can share my stuff</h2>
            <h2 className="para1_h2">Its been covid-19 days just sitting at home, I was looking for something to kill time. finally ended up with a plan to create a portfolio website about myself, Its been a while i was planning to create it.</h2>

            <h2 className="para2_h4">After searching the templates in the internet, came up with a good template idea wanted to design it from scrach using React.js</h2>

            <h3></h3>


        </section>
    )
}

export default Introduction;