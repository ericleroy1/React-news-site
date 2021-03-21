import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let isLoggedIn = true

function App() {
    return (
        <Router>
            {isLoggedIn ? <LandingPage /> : <LoginPage />}
        </Router>
    )}

export default App