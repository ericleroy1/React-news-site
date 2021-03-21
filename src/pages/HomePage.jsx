import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function HomePage() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		fetch(
			"https://newsapi.org/v2/everything?" +
				"q=Apple&" +
				"from=2021-02-28&" +
				"sortBy=popularity&" +
				"apiKey=39bd2d941e0d433e8f54efdd2e183dda"
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setArticles(data.articles);
			});
	}, []);

	console.log(articles);

	return (
		<div>
			<Navbar />
			<h2>Today's top stories</h2>
			{articles.map((article) => {
				return (
					<div>
						<h1>{article.title}</h1>
						<h3>{article.author}</h3>
						<p>{article.content}</p>
					</div>
				);
			})}
		</div>
	);
}

export default HomePage;
