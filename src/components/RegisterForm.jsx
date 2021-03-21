import React from "react";
import Input from "./Input";

function RegisterForm() {
	return (
		<form>
			<Input type="text" placeholder="Username" />
			<Input type="password" placeholder="Password" />
			<Input type="password" placeholder="Confirm Password" />
		</form>
	);
}

export default RegisterForm;
