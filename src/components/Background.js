import React from "react";
import "../style.css";

export default function Background() {
	return (
		<div className="background section-container">
			<h1>Background</h1>
			<p>
				For the past 5 years I have been working as a product manager and web
				developer helping companies build solutions that solve real problems
				across iOS, aOS, and web.
			</p>
			<p>
				Right now, I work at Backroads on the IT Team as a Technical Product
				Specialist.
			</p>

			<p>“You live and learn. At any rate, you live.” - Douglas Adams</p>
			<p className="main--contact">
				Read my{" "}
				<a
					href="https://griffinsgamedevelopment.com/"
					target={"_blank"}
				>
					VR Game Development Blog
				</a>
				{" 📚"}
			</p>
		</div>
	);
}
