import React, { useEffect } from 'react';
import { Card } from "react-bootstrap";
import "./NewsItem.css";
import firebase from "../firebase";


function MyNewsItem(props) {


    const db = firebase.firestore();
    let user = firebase.auth().currentUser.uid;


    function deleteItem(e){
        console.log(user);
        console.log(e.target.value);
        console.log("deleting");
        db.collection(firebase.auth().currentUser.uid).doc(e.target.value).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
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
				<button value={props.title} onClick={deleteItem}>Delete</button>
			</Card.Body>
		</Card>

    )
}

export default MyNewsItem
