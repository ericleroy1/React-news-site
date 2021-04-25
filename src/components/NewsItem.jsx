import React from "react";
import { Card } from "react-bootstrap";
import "./NewsItem.css";
import firebase from "../firebase";


function NewsItem(props) {

const db = firebase.firestore();
const user = firebase.auth().currentUser.uid;

	function addArticle(){
		db.collection(user).doc(props.title).set({
			picture: props.image,
			title: props.title,
			url: props.url,
		})
		.then(() => {
			console.log("Document successfully written!");
		})
		.catch((error) => {
			console.error("Error writing document: ", error);
		});
	}

	return (
		<Card style={{ width: "70%" }}>
			<a href={props.url} target="_blank" rel="noreferrer" style={{color: 'black'}}>
			<div className="cardTop">
			<Card.Img className="cardPic" variant="top" src={props.image}/>
			<Card.Title className="cardTitle">{props.title}</Card.Title>
			</div>
			</a>


			<Card.Body>
				<a href={props.url} target="_blank" rel="noreferrer" style={{color: 'black'}}>
				<Card.Text>{props.content}</Card.Text>
				</a>
				<button onClick={addArticle}>Add to myNews</button>
			</Card.Body>
		</Card>
	);
}

export default NewsItem;
