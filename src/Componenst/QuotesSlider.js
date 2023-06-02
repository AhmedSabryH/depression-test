import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { captions } from './Advices';
import "./QuotesSlider.css";
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';



const Container = styled.div`
width: 70%;
height: 500px;
display: flex;
justify-content:space-between ;
align-items:center;
margin:auto;
margin-top:10vh;

`
const Content = styled.div`
background: black;
width: 90%;
height: 70%;
display: flex;
border-radius:100px 10px ;
justify-content:space-between ;
align-items:center;
margin: auto;
`
const Button = styled.button`
flex: 0.8;
width: 10px;
height: 100px;
color: #fff;
border: none;
  cursor: pointer;
  transition:0.5s;
  &:hover{
    color: #fff;
    transition: all 0.4s ease-in ;
    -moz-transition: all 0.4s ease-in;
    -webkit-transition: all 0.4s ease-in;
    -ms-transition: all 0.4s ease-in;
    -o-transition: all 0.4s ease-in;
  }


`
const Texting = styled.div`
flex: 16;
display: flex;
justify-content:center;
align-items:center;
margin: auto;
padding: 20px;
`
const Qoute = styled.h1`
color: #fff;
`



function QuotesSlider() {
  const [quotes, setQuotes] = useState([]);



  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get(captions)
      .then(res => setQuotes(res))
      .catch(err => console.log(err));
  }, []);

  const handleNextQuote = () => {
    setCurrentIndex(currentIndex + 1)
    if (currentIndex === 8) {
      setCurrentIndex(currentIndex);
    }
  }


  const handlePreviousQuote = () => {
    setCurrentIndex(currentIndex - 1)
    if (currentIndex === 0) {
      setCurrentIndex(currentIndex);
    }
  };

  return (
    // <Container>  
    //     <Content>
    //       <Button  onClick={handlePreviousQuote}><ArrowBackIos/></Button>
    //       <Texting>
    //         <Qoute>{captions[currentIndex].text}</Qoute>
    //       </Texting>  
    //       <Button onClick={handleNextQuote}><ArrowForwardIosIcon/></Button>  
    //     </Content>
    // </Container>  
    <>
      <div className='QuoteConbg'>
        <div className='Quote-bg'></div>
        <div className='Qoute-Content'>
          <button onClick={handlePreviousQuote}>
           <ArrowBackIos/>
          </button>
           <h3>{captions[currentIndex].text}</h3>
           <button onClick={handleNextQuote}>
           <ArrowForwardIosIcon/>
           </button>
        </div>
      </div>

    </>
  );
}

export default QuotesSlider;


