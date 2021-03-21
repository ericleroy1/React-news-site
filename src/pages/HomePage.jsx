import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NewsItem from "../components/NewsItem";

function HomePage() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		fetch(
			"https://newsapi.org/v2/top-headlines?country=au&" + 
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

export default HomePage;
