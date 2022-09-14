import React from "react";
import "../style.css";

export default function Main() {
	return (
		<div className="section-container">
			<h1 className="main--message">
				{" "}
				I'm <span className="highlight">Griffin Arkilic</span>, a web and game
				developer based in Oakland, CA.
			</h1>

			<p className="main--contact">
				👉 Get in touch{" "}
				<a
					href="mailto:garkilic@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>Garkilic@gmail.com</span>
				</a>{" "}
			</p>
			<p className="main--contact">
				👨‍💻 Lets Connect{" "}
				<a href="https://www.linkedin.com/in/griffin-arkilic/" target="_blank">
					<span>LinkedIn</span>
				</a>{" "}
			</p>
		</div>
	);
}
