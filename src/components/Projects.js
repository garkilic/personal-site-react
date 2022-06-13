import React from "react";
import { useState } from "react";
import ProjectList from "./ProjectList";

export default function Projects() {
	const [projects, setProjects] = useState([
		{
			title: "Build Up",
			description:
				"Fitness platform to connect gym-goers with personal trainers. Through short questionnaire personal trainers will create a 3-month workout program for a flat fee. No more pricey subscriptions or unnecessary applications.",
			url: "https://github.com/garkilic/build-up",
			id: 1,
		},
	]);
	return (
		<div className=" projects section-container">
			<h1>Projects</h1>
			<ProjectList projects={projects} />
			<p>
				<a
					className="link--out"
					href="https://github.com/garkilic"
					target="_blank"
					rel="noopener noreferrer"
				>
					View more on Github <span>&#8594;</span>
				</a>
			</p>
		</div>
	);
}
