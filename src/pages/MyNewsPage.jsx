import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import MyNewsItem from "../components/MyNewsItem";


function MyNewsPage() {

	const db = firebase.firestore();
	let user = firebase.auth().currentUser.uid

	useEffect(()=> {
		const db = firebase.firestore();
		let user = firebase.auth().currentUser.uid
	});
	

	const [articles, setArticles] = useState([]);



	function getItems(){

		let articlesList = [];

		db.collection(user).get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				articlesList.push(doc.data())
			});
		}).then(()=>{
			setArticles(articlesList);
			console.log(user);
		});
	};

	console.log(articles);

	return (
		<div>
			<h1>This is your MyNews database</h1>
			<button onClick={getItems}>getItems</button>

			{articles.map((article) => {
				return (
					<MyNewsItem
						key={article.url}
						image={article.picture}
						title={article.title}
						url={article.url}
					/>
				);
			})}
		</div>
	);
}

export default MyNewsPage;
