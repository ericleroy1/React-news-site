import React from "react";
import Input from "./Input";

function LoginForm() {
	return (
		<form>
			<Input type="text" placeholder="Username" />
			<Input type="password" placeholder="Password" />
		</form>
	);
}

export default LoginForm;
