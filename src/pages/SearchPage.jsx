import React, { useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
import "../styles.css";

const SearchPage = (props) => {

	const [articles, setArticles] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	const handleSearchInputChanges = (e) => {
		setSearchValue(e.target.value);
	};
	
	const resetInputField = () => {
		setSearchValue("")
	};

	const callSearchFunction = (e) => {
		console.log("search function called");
		console.log(searchValue);
		e.preventDefault();
		searchValueFunction();
		resetInputField();
	};



	function searchValueFunction() {

		fetch(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=39bd2d941e0d433e8f54efdd2e183dda`)
		  .then(response => response.json())
		  .then(jsonResponse => {
			  console.log(jsonResponse.articles)
			  setArticles(jsonResponse.articles)
		  })
		  .then(console.log(articles + " are set"))

		  };

	function searchArticles(){
		fetch(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=39bd2d941e0d433e8f54efdd2e183dda`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setArticles(data.articles);
					console.log(data);
				});
	};

	// useEffect(() => {
	// 	(searchValue? searchArticles() : console.log("no search"));
	// }, []);

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
			<div>
			</div>

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
