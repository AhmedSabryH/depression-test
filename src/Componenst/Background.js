import React from 'react';
import styled from 'styled-components';
import myImage from '../assets/depression3747_hitpaw.com.png'




const MainImage = styled.div`
background-image: url(${myImage});
width: 500px;
height: 600px;
background-size: contain;
background-repeat: no-repeat;

animation-name: imgscale;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;


    @keyframes imgscale {
    0%{transform: scale(1);
        -moz-transform: scale(1);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform:scale(1);
    }

    100%{transform: scale(1.1);
            -moz-transform: scale(1.1);
            -webkit-transform : scale(1.1);
            -ms-transform: scale(1.1);
            -o-transform:scale(1.1);
    } 
}
`
 function Background() {
  return (

            <MainImage>
                
            </MainImage>

  )
}


export default Background;