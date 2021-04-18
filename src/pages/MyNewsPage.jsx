import React, { useState } from "react";
import firebase from "../firebase";
import NewsItem from "../components/NewsItem";

function MyNewsPage() {

	const db = firebase.firestore();
	let user = firebase.auth().currentUser.uid

	const [articles, setArticles] = useState([]);

	function getItems(){

		let articlesList = [];

		db.collection(user).get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				articlesList.push(doc.data().title)
			});
		}).then(()=>{
			setArticles(articlesList)
		});
	};

	console.log(articles);

	return (
		<div>
			<h1>This is your MyNews database</h1>
			<button onClick={getItems}>getItems</button>

			{articles.map((article) => {
				return (
					<NewsItem
						key={article.url}
						image={article.urlToImage}
						title={article.title}
						author={article.author}
						content={article.content}
						url={article.url}
					/>
				);
			})}
		</div>
	);
}

export default MyNewsPage;
