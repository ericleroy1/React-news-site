import React, { useState, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MyNewsPage from "./pages/MyNewsPage";


let isLoggedIn = true

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

    render() {
        return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        {isLoggedIn ? <LandingPage /> : <LoginPage />}
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