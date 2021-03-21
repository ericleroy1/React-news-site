import React from "react";
import { Route } from "react-router-dom";

import App from "./App";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

export default (
    <Route path="/" component={App}>
        <Route component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage}/>
    </Route>
)