import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function LandingPage() {
	return (
		<Router>
			<div>
				<Navbar />
				<h1>
					Welcome to your news Website - it is under development and will be
					finished soon
				</h1>
			</div>
		</Router>
	);
}

export default LandingPage;
