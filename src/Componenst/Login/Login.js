import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const signup = (event) => {
    event.preventDefault();

    navigate("/Signing");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/Auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      setError("Invalid email or password");
      return;
    }

    window.location.replace("/home");

    navigate("/login");
  };
  const handleLog = (event) => {
    event.preventDefault();

    navigate("/home");
  };

  return (
    <div className="L-container">
      <div className="bg-img"></div>
      <form className="L-Form" onSubmit={handleSubmit}>
        <div className="logo-con" >
          <img src={Logo} width={"100%"} height={"100%"} />
        </div>
        <input
        className="In-Login"
        required
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />
        <input
        className="In-Login"
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" value="Login"  onClick={handleLog} />
        {error && <p>{error}</p>}

        <button onClick={signup}> Sign Up </button>
      </form>
    </div>
  );
}

export default Login;
