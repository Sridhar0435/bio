import React from 'react';
import '../../css/LeftBar.css';
import LeftBar from "../MainBox/LeftBar";
import RightBar from "../MainBox/RightBar";
function Main() {
    return (
        <section className="main_parent">
            <LeftBar />
            <RightBar />
        </section>

    );
}
export default Main;
