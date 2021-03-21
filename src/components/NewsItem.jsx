import React from "react";
import { Card, Button } from "react-bootstrap";

function NewsItem(props) {

	return (
		<Card style={{ width: "90%" }}>
			<Card.Img variant="top" src={props.image} />
			<Card.Body>
				<Card.Title>{props.headline}</Card.Title>
				<Card.Text>{props.content}</Card.Text>
				<a rel="noopener noreferrer" href={props.url} target="_blank">
				<Button variant="primary">Go somewhere</Button>
				</a>

				
			</Card.Body>
		</Card>
	);
}

export default NewsItem;
