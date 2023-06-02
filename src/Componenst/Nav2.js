import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Ogo from "../assets/logo.png";
import Userinfo from "../Componenst/Userinfo";
import "./Nav.css";

function Nav2() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const navigate = useNavigate();

  const handleAccountClick = (event) => {
    event.preventDefault();
    navigate("/account/my-account");
  };
  const Links=["Home","Quiz","Post","Advices","About"];
  return (
  
     <>
     <nav>
      
        <Userinfo/>
          <div className="links">
            {
              Links.map((Link)=>(
                <a href={"/"+Link} key={Link}>{Link}</a>))
            }
            </div>  
     </nav>
     </>   
  );
}

export default Nav2;
