import React, { useState } from "react";
import axios from "axios";
import "./TextAreaForm.css"
import { useNavigate } from "react-router-dom";

function FacebookProfileButton() {
  const handleButtonClick = () => {
    window.open("https://www.facebook.com/");
  };

  return (
    <button
      onClick={handleButtonClick}
      style={{
        backgroundColor: "#3b5998",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      Go to my Facebook profile
    </button>
  );
}

function TextAreaForm() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:5000/tweet/add-tweet", { text })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setText("");
    
    navigate("/response");
  };

  return (
      <>
    <div className="Textarea-con">
      <form onSubmit={handleSubmit}>
        <textarea required placeholder="Write Your Explanation here ..." value={text} onChange={handleChange}></textarea>
        <input type="submit" value={"Test"}/>
        <FacebookProfileButton />

      </form>
      </div>    
    </>
  );
}

export default TextAreaForm;
