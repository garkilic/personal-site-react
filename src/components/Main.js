import React from "react";
import "../style.css";

export default function Main() {
	return (
		<div className="section-container">
			<h1 className="main--message">
				{" "}
				I'm <span className="highlight">Griffin Arkilic</span>, a developer and
				product manager based in Oakland, CA. I love building fantastic user
				experiences and amazing digital products.
			</h1>
			<h1 className="main--message">
				Currently, I work on personal projects in web and game development as
				well as build/design/maintain websites for local small businesses at
				Black Sand Studios.
			</h1>

			<p className="main--contact">
				👉 Get in touch{" "}
				<a
					href="mailto:garkilic@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>garkilic@gmail.com</span>
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
