import React from "react";
import "../style.css";

import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaUnity } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { FaDrupal } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

export default function Skills() {
	return (
		<div className="skills-container section-container">
			<h1>Lanugages/Technologies</h1>
			<div className="skills">
				<FaJs className="icon" />
				<FaHtml5 className="icon" />
				<FaCss3Alt className="icon" />
				<FaReact className="icon" />
				<FaUnity className="icon" />
				<FaGit className="icon" />
				<SiCsharp className="icon" />
				<FaDrupal className="icon" />
				<FaNodeJs className="icon" />
			</div>
		</div>
	);
}
