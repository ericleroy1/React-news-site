import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function LandingPage() {
	return (
		<Router>
			<div>
				<Navbar />
				<h1>Welcome to your news</h1>
			</div>
		</Router>
	);
}

export default LandingPage;
