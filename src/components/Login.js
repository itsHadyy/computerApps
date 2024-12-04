import React, { useState } from "react";
import axios from "axios";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            const response = await axios.post("http://localhost:5001/login", {
                username,
                password,
            });
            alert(response.data.message);
            onLogin();
        } catch (error) {
            alert("Login failed. Check your username and password.");
        }
    };

    return (
        <div className="loginPage">
            <div>
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ margin: "5px" }}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ margin: "5px" }}
                />
                <br />
                <button onClick={login}>Login</button>
            </div>
        </div>
    );
}

export default Login;