import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "./firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MyNewsPage from "./pages/MyNewsPage";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";

// Cloned repo

require("firebase/firestore");

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    state = { isSignedIn: true};

    uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false
        }
    };

    componentDidMount() {

        if (!firebase.apps.length) {
            firebase.initializeApp({});
         }else {
            firebase.app();
         };

        this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
          this.setState({
            loading: false,
            user,
          });
          this.setState({isSignedIn: !!user})
        });
      }


    render() {
        return (
        <div>
            <Router>
            {this.state.isSignedIn ? 
            (<Navbar
                userNameDisplay={firebase.auth().currentUser.displayName}
                buttonDisplay="Sign Out"
                />)
            :
            (<Navbar
                userNameDisplay={null}
                buttonDisplay="Sign In"/>)
            }
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