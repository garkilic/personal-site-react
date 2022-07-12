import React from "react";
import "../style.css";

export default function Main() {
	return (
		<div className="section-container">
			<h1 className="main--message">
				I'm <span className="highlight">Griffin Arkilic</span>, a product
				manager and web developer based in San Francisco, CA. I love building
				fantastic user experiences and amazing digital products.
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
		</div>
	);
}
