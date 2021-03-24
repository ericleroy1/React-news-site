import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginForm from "../components/LoginForm";


import LoginButton from "../components/LoginButton";
import SignoutButton from "../components/SignoutButton";

function LandingPage() {
	return (
		<Router>
			<div>
				<h1>Welcome to your news Website</h1>
				<LoginForm />
				<LoginButton />
				<SignoutButton />
				<button>Login</button>
				<h2>Not registered?</h2>
				<button>Register</button>
			</div>
		</Router>
	);
}

export default LandingPage;
