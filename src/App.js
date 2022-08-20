import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
	return (
		<div>
			<Nav />
			<Main />
			<Background />
			<Skills />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
