import React, { useState } from "react";
import NewsItem from "../components/NewsItem";


function SearchPage() {

	const [articles, setArticles] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	function searchArticles(event, searchValue){
		console.log("function called");
		console.log(searchValue);
		fetch(
			"https://newsapi.org/v2/top-headlines?country=au&" + 
				"apiKey=39bd2d941e0d433e8f54efdd2e183dda"
		)
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				setArticles(data.articles);
				console.log(data);
			});
			event.preventDefault();
	};

	return (
		<div>
			<h2>Search for news topics here</h2>
			<form onSubmit={searchArticles}>
				<input
					type="text"
					placeholder="search by topic..."
					onChange={event => setSearchValue(event.target.value)}>
				</input>
				<button type="submit">Go</button>
			</form>

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

export default SearchPage;
