import React, {useState} from "react";
import { Card, Button } from "react-bootstrap";

function NewsItem(props) {

	return (
		<Card style={{ width: "90%" }}>
			<Card.Img variant="top" src={props.image} style={{width: "40%"}}/>
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.content}</Card.Text>
				<a rel="noopener noreferrer" href={props.url} target="_blank">
				<Button variant="primary">Go to article</Button>
				</a>
				<Button>Add to MyNews</Button>
			</Card.Body>
		</Card>
	);
}

export default NewsItem;
