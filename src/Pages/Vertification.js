import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Vertification() {
    const [formData, setFormData] = useState({
        verificationCode: "",
    });

    
    
    const navigate = useNavigate();
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
        ...prevState,
        [name]: value,
        }));
    };
    
    const handleVerificationCodeSubmit = (event) => {
        event.preventDefault();
    

    
        const isCodeCorrect = formData.verificationCode === "dep2023"; 
    
        if (isCodeCorrect) {
        navigate("/home");
        } else {
        alert("The code is not correct");
        }
    };
    
    return (
        <>
        <form onSubmit={handleVerificationCodeSubmit}>
            <label htmlFor="verificationCode">Verification Code:</label>
            <input
            type="text"
            id="verificationCode"
            name="verificationCode"
            value={formData.verificationCode}
            onChange={handleInputChange}
            /><br /><br />
    
            <input type="submit" value="Submit" />
        </form>
        </>
    );
}

export default Vertification
