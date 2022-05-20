import React from "react";
import "../style.css"

export default function Background() {
    return(
        <div className="background section-container">
            <h1><span className="highlight">Background</span></h1>
            <p>For the past 5 years I have been working as a product manager helping companies build solutions that solve real problems.</p>
            <p>I decided to transition in front-end development because, as much as I loved product management, I wanted to be the one doing the building.</p>
            <a href="#" className="background--resume">View my resume</a>
        </div>
    )
}