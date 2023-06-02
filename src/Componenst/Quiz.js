import React, { useState } from "react";
import { problemms } from "./AllQuestions.js";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

function Quizz() {
  const [currentQues, setCurrentQues] = useState(0);
  const [choosenAns, setChoosenAns] = useState("");
  const [indexOfChoosenAns, setIndexOfChoosenAns] = useState(null);
  const [result, setResult] = useState(false);

  const [grades, setGrades] = useState({
    marks: 0,
    rightAnswers: 0,
    wrongAnswers: 0,
  });

  const [isAnsSelected, setIsAnsSelected] = useState(false);
  const totalQuestions = problemms.length;
  const navigate = useNavigate();

  const ChoosenAns = (ans, index) => {
    setIndexOfChoosenAns(index);
    if (ans === problemms[currentQues].right_answer) {
            grades.rightAnswers ++;
          } else {
            grades.wrongAnswers ++;
          }
    if (currentQues !== problemms.length - 1) {
      setCurrentQues((current) => current + 1);
    } else {
      setCurrentQues(0);
      setResult(true);
    }
      setChoosenAns("");
      setIndexOfChoosenAns(null);
      setIsAnsSelected(false);
  };

  const { question, answers } = problemms[currentQues];
  const numRightAnswers = grades.rightAnswers;
  const percentageRightAnswers = (numRightAnswers / 24) * 100;
  const handleTextAreaQuiz = () => {
    navigate("/post");
  };

  return (
    <div className="q-container">
      {!result ? (
        <div className="q-wrapper">
          <div className="div-h1">
            <h1 className="q-h1"> Life Quality Test </h1>
          </div>

          <div className="div-h2">
            {" "}
            <h2 className="q-h2"> {question} </h2>
          </div>

          <div className="div-ul">
            <ul className="q-ul">
              {answers.map((ans, index) => (
                <li
                onClick={() => {
                  ChoosenAns(ans, index);
                }}  
                  key={ans}
                  className="choosen-ans"
                >
                  {ans}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="r-wrapper">
          <h2 className="r-h2">Result : <span> {percentageRightAnswers.toFixed(0)}% </span> </h2>
          <a className=".r-link">
            <button className="view" onClick={handleTextAreaQuiz}>
              post
            </button>
          </a>
          {percentageRightAnswers === 0 ? (
            <p className="concern res"> NO dipression.</p>
          ) : percentageRightAnswers <= 50 ? (
            <p className="r-p res">Mild dipression</p>
          ) : percentageRightAnswers <= 75 ? (
            <p className="good res"> Moderately severe dipression</p>
          ) : (
            <p className="excellent res">severe dipression</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Quizz;
