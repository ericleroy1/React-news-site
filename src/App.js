import React from "react";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";

let isLoggedIn = true

function App() {
    return (isLoggedIn ? <LandingPage/> : <LoginPage />)
}

export default App