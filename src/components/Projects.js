import React from "react";
import { useState } from "react";
import ProjectList from "./ProjectList";

export default function Projects() {
	const [projects, setProjects] = useState([
		{
			title: "Build Up",
			languages: "HTML, CSS, Javascript, React",
			description:
				"Fitness platform to connect gym-goers with personal trainers. Through short questionnaire personal trainers will create a 3-month workout program for a flat fee. No more pricey subscriptions or unnecessary applications.",
			url: "https://github.com/garkilic/build-up",
			id: 1,
		},
		{
			title: "Personal Site",
			languages: "HTML, CSS, Javascript, React",
			description:
				"Personal site used to act as an introduction to me as a developer as well as a repository of my personal projects.",
			url: "https://github.com/garkilic/personal-site-react",
			id: 2,
		},
		{
			title: "Fun Fact API",
			languages: "HTML, CSS, Javascript, REST API",
			description: "Practice working with REST API's to build something fun.",
			url: "https://github.com/garkilic/Fun-Fact-API-Tool",
			id: 3,
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
