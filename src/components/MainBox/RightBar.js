import React, { useState, useEffect } from 'react';
import '../../css/RightBar.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Introduction from "../Details/Introduction";
import About from "../Details/About";
import Blog from "../Details/Blog";
import Projects from "../Details/Projects";
import Me from "../Details/Me";
function RightBar(props) {

    return (

        <article className="right_bar_parent">
            <Switch>
                <Route path="/" component={Me} />
                <Route path="/introduction" exact component={Introduction} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/projects" component={Projects} />

            </Switch>
        </article>


    );
}

export default RightBar;
