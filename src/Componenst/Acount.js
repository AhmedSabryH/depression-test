import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Account.css";
import UserPic from "../assets/userinfo.png";
import Logout from "../assets/logout.png";

function Acount() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    birthdate: "",
    name: "",
    phone: "",
    gender: "",
    country: "",
    status: "",
  });
  const { accountName } = useParams();

  useEffect(() => {
    axios
      .get(`/api/accounts/${accountName}`)
      .then((response) => setFormData(response.data))
      .catch((error) => console.log(error));
  }, [accountName]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/api/accounts/${accountName}`, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  const Links = ["Home", "Quiz", "Post", "Advices", "About"];
  return (
    <div className="a-container">
      <div className="LeftSide">
        <div className="avatar">
          <img src={UserPic} width={"100%"} height={"100%"} />
        </div>
        <h1>Welcome,{accountName}</h1>

        <div className="GoLinks">
          {
            Links.map((Link) => (
              <a href={"/" + Link} key={Link}>{Link}</a>))
          }
          <div className="logout">
            <div className="logicon">
              <img src={Logout} width={"100%"} height={"100%"} />
            </div>
            <a href="/">LOG OUT</a>
          </div>
        </div>
      </div>
      <div className="RightSide">
        <h1>your personal profile info</h1>
        <form  className="account-form" method="get" action="/account">
          <div className="LeftSide">
            <div className="contain">
              <h2>Name</h2>
              <input placeholder={accountName} name="name" />
            </div>
            <div className="contain">
              <h2>username</h2>
              <input value={formData.username} placeholder="username" name="username" />
            </div>
            <div className="contain">
              <h2>email</h2>
              <input type={"email"} value={formData.email} placeholder="email" name="email" />
            </div>
            <div className="contain">
              <h2>phone</h2>
              <input type={"text"} value={formData.phone} placeholder="phone" name="phone" />
            </div>
            <div className="contain">
              <h2>birthdate</h2>
              <input type={"date"} value={formData.birthdate} placeholder="birthdate" name="birthdate" />
            </div>
            <div className="contain">
              <h2>gender</h2>
              <select name="gender">
                <option>
                  select a Gender
                </option>
                <option>
                  Male
                </option>
                <option>
                  Female
                </option>
              </select>
            </div>
            <div className="contain">
              <h2>country</h2>
              <input type={"text"}  placeholder="country" name="country" />
            </div>
            <div className="contain">
              <h2>status</h2>
              <select name="status">
                <option>
                  select a status
                </option>
                <option>
                  single
                </option>
                <option>
                  married
                </option>
                <option>
                  absolute
                </option>
                <option>
                  widower
                </option>
              </select>
            </div>
          </div>
          <div className="RightSide">
            <div className="contain">
              <h2>old Password</h2>
              <input type={"password"} placeholder="password" name="Opass" />
            </div>
            <div className="contain">
              <h2>New Password</h2>
              <input type={"password"}  placeholder="password" name="Npass" />
            </div>
            <div className="contain">
              <h2>Confirm Password</h2>
              <input type={"password"}  placeholder="password" name="Cpass" />
            </div>
          </div>
          <div className="button-container">
            <input type={"submit"} value="Correct Save info" />
          </div>


        </form>

      </div>
    </div>
  );
}

export default Acount;
