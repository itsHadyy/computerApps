import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";
function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    return (
        <div>
            {!loggedIn ? <Login onLogin={handleLogin} /> : <Dashboard />}
        </div>
    );
}

export default App;