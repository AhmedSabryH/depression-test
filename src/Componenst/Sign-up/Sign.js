import "./Sign.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";


function Sign() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    birthdate: "",
    name: "",
    phone: "",
    gender: "",
    status: "",
    country: "",
  });

  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataEncoded = new URLSearchParams(formData).toString();
    const response = await fetch("http://127.0.0.1:5000/Auth/sign-up", {
      method: "POST",
      body: formDataEncoded,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (!response.ok) {
      setError("Invalid email or password");
      return;
    }

    const code = "1234";

    setVerificationCode(code);
    navigate("/verify-code");
  };
  const handleLog = (event) => {
    event.preventDefault();

    navigate("/");
  };

  return (
    <>
    <div className="si-container">
      <div className="Si-bg"></div>
      <form className="Si-Form" onSubmit={handleSubmit}>
      <div className="S-logoCon">
      <div className="logo-con" >
          <img src={Logo} width={"100%"} height={"100%"} />
        </div>
      </div>
        <div className="content">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="UserName.."
            required
            value={formData.username}
            onChange={handleInputChange}
            />
          <br />
          <br />
        </div>

        <div className="content">
          <input
            type="text"
            placeholder="Name.."
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
          <br />
          <br />
        </div>

        <div className="content">
          <input
            placeholder="Password.."
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleInputChange}
            />
          <br />
          <br />
        </div>

        <div className="content">
          <input
            placeholder="Email.."
            type="email"
            id="email"
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <br />
          <br />
        </div>
        
        <div className="content">
          <input
            type="text"
            placeholder="Country"
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleInputChange}
          />
          <br />
          <br />
        </div>

        <div className="content">
          <input
            placeholder="Phone"
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
          />
          <br />
          <br />
        </div>
        <div className="content">
          <input
            type="date"
            id="birthdate"
            required
            name="birthdate"
            value={formData.birthdate}
            onChange={handleInputChange}
            />
          <br />
          <br />
        </div>


        <div className="content">
          <select
          placeholder="Gender"
            id="gender"
            name="gender"
            required
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">--Please choose an Gender--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <br />
        </div>

        <div className="content">
          <select
            id="status"
            name="status"
            required
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="">--Please choose an Status--</option>
            <option value="single">single</option>
            <option value="married">married</option>
            <option value="absolute">absolute</option>
            <option value="widower">widower</option>
          </select>
          <br />
          <br />
        </div>

        <input type="submit" value="Submit" />
        <button onClick={handleLog}>Login</button>
      </form>
    </div>
            </>
  );
}

export default Sign;
