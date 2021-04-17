import React from "react";
import { Card, Button } from "react-bootstrap";
import "./NewsItem.css";
import firebase from "../firebase";

function NewsItem(props) {

let myNews = firebase.firestore().collection('articleCollection')
console.log(myNews);

// function addArticle(){
// 	db.collection("users").add({
// 		first: "Ada",
// 		last: "Lovelace",
// 		born: 1815
// 	})
// 	.then((docRef) => {
// 		console.log("Document written with ID: ", docRef.id);
// 	})
// 	.catch((error) => {
// 		console.error("Error adding document: ", error);
// 	});
// }


	return (
		<Card style={{ width: "70%" }}>
			<a href={props.url} target="_blank" style={{color: 'black'}}>
			<div className="cardTop">
			<Card.Img className="cardPic" variant="top" src={props.image}/>
			<Card.Title className="cardTitle">{props.title}</Card.Title>
			</div>
			</a>


			<Card.Body>
				<a rel="noopener noreferrer" href={props.url} target="_blank" style={{color: 'black'}}>
				<Card.Text>{props.content}</Card.Text>
				</a>
				{/* <Button onClick={addArticle} variant="dark">Add to MyNews</Button> */}
			</Card.Body>
		</Card>
	);
}

export default NewsItem;
