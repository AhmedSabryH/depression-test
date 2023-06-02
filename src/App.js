import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Advices from "./Pages/Advices";
import About from "./Pages/About";
import React from "react";
import Quiz from "./Pages/Quiz";
import Signing from "./Pages/Signing";
import Login from "./Pages/Login";
import Vertification from "./Pages/Vertification";
import Account from "./Pages/Account";
import TextAreaPage from "./Pages/TextArea";
import Response from "./Pages/Response";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signing" element={<Signing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/advices" element={<Advices />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/post" element={<TextAreaPage />} />
          <Route path="/response" element={<Response />} />
          <Route path="/verify-code" element={<Vertification />} />
          <Route path="/account/:accountName" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
