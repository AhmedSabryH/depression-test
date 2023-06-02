import React from "react";
import axios from "axios";
import Nav2 from "..//Componenst/Nav2";
import Result from "..//Componenst/Response";
//  const Response = () => {
//    axios
//      .get("https://jsonplaceholder.typicode.com/posts")
//      .then((response) => {
//        document.getElementById("result").textContent = JSON.stringify(
//          response.data
//        );
//      })
//      .catch((error) => {
//        console.log(error);
//      });

//    return (
//      <div>
//        <Nav2 />
//        <h2 id="result"> </h2>
//      </div>
//    );
//  };
function Response(){
  return (
    <div>
      <Nav2/>
      <Result/>
    </div>
  );

}

export default Response;
