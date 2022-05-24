import React from "react";

export default function Footer() {
    return(
        <div className="footer">
            <h3>Created by Griffin Arkilic</h3>
                <ul className="footer--links">
                    <li><a href="mailto:garkilic@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
                    <li><a className="link--out" href="https://www.linkedin.com/in/griffin-arkilic/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a  href="https://github.com/garkilic" target="_blank" rel="noopener noreferrer">Github</a></li>
                </ul>
        </div>
    )
}