import React from "react";

function Card(props) {
	return (
		<div>
			<h1>{props.headline}</h1>
			<h3>{props.author}</h3>
			<p>{props.content}</p>
		</div>
	);
}

export default Card;
