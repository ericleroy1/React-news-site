import React, { useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
import "../styles.css";

function SearchPage(props) {

	const [searchValue, setSearchValue] = useState("");

	const handleSearchInputChanges = (e) => {
		setSearchValue(e.target.value);
	};
	
	const resetInputField = () => {
		setSearchValue("")
	};

	const callSearchFunction = (e) => {
		e.preventDefault();
		props.search(searchValue);
		resetInputField();
	};

	const [articles, setArticles] = useState([]);

	useEffect(() => {
		fetch(
			"https://newsapi.org/v2/everything?qInTitle=" + searchValue +
				"apiKey=39bd2d941e0d433e8f54efdd2e183dda"
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setArticles(data.articles);
				console.log(data);
			});
	}, []);

	return (
		<div>
			<form className="search">
				<input
				value={searchValue}
				onChange={handleSearchInputChanges}
				type="text"
				/>
				<input onClick={callSearchFunction} type="submit" value="SEARCH" />
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
	)
}

export default SearchPage;
