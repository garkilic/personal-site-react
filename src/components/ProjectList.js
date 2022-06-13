import React from "react";

export default function ProjectList({ projects }) {
	return (
		<div>
			{projects.map((project) => (
				<div className="projects" key={project.id}>
					<h2>
						<a
							className="link--out"
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{project.title}
						</a>
					</h2>
					<p>{project.description}</p>
				</div>
			))}
		</div>
	);
}
