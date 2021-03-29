import React from "react";
import { Card, Button } from "react-bootstrap";
import "./NewsItem.css";

function NewsItem(props) {

	return (
		<Card style={{ width: "70%" }}>
			<div className="cardTop">
			<Card.Img className="cardPic" variant="top" src={props.image}/>
			<Card.Title className="cardTitle">{props.title}</Card.Title>
			</div>

			<Card.Body>
				<Card.Text>{props.content}</Card.Text>
				<a rel="noopener noreferrer" href={props.url} target="_blank">
				</a>
				<Button variant="dark">Add to MyNews</Button>
			</Card.Body>
		</Card>
	);
}

export default NewsItem;
