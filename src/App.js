import React, { useState, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MyNewsPage from "./pages/MyNewsPage";
import Navbar from "./components/Navbar";


firebase.initializeApp({
    apiKey:"AIzaSyBZBoN6p2_Ftm3WfREz_Rp_NPeauABcDLE",
    authDomain:"react-news-site-acd3c.firebaseapp.com"
})

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }
    
    state = { isSignedIn: true}

    uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = ()=>{
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSignedIn: !!user})
            console.log(user, user.displayName);
        })

    }

    render() {
        return (
        <div>
            <Router>
            <Navbar/>
                <Switch>
                    <Route exact path="/">
                        {this.state.isSignedIn ? 
                        (<HomePage/>)
                        :
                        (<StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                        />) }
                    </Route>
                    <Route path="/home">
                        <HomePage/>
                    </Route>
                    <Route path="/search">
                        <SearchPage/>
                    </Route>
                    <Route path="/mynews">
                        <MyNewsPage/>
                    </Route>
                </Switch>
            </Router>
            <p>{this.state.apiResponse}</p>
        </div>
        )
    }
}

export default App