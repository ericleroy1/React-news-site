import React, { useEffect } from "react";
import firebase from "../firebase";

function MyNewsPage() {


useEffect(() => {
	console.log(firebase.auth().currentUser.uid);
}, []);


	return (
		<div>
			<h1>This is your MyNews database</h1>
			<button>getItems</button>
		</div>
	);
}

export default MyNewsPage;
