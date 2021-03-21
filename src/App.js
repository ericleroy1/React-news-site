import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MyNewsPage from "./pages/MyNewsPage";

let isLoggedIn = true

function App() {
    return (
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
    )}

export default App