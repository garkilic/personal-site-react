import React from "react";

export default function Projects(props) {
    return(
        <div className="projects section-container">
            <h1><span className="highlight">Projects</span></h1>
            <h2 className="projects--title">{props.title}</h2>
            <p className="projects--description">{props.description}</p>
        </div>
    ) 
}