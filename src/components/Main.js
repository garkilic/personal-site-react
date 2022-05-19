import React from "react";
import "../style.css"

export default function Main() {
    return (
        <div className="main section-container">
            <h1 className="main--message">I'm <span className="highlight">Griffin Arkilic</span>, a front-end developer based in San Francisco, CA. I love building fantastic user experience and services that people need.</h1>
            <p className="main--contact">👉 Get in touch <a href="mailto:garkilic@gmail.com" target="_blank" rel="noopener noreferrer">garkilic@gmail.com</a> </p>
        </div>
    )
}