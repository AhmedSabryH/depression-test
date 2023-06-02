import React,{useState } from "react";
import "./About.css";

function Aboutc() {
  const [open,setOpen] = useState(false);
  return (
    <>
      <div className="Aboutbg"></div>
      <div className='Acontent'>
        <h1 onClick={()=>setOpen(!open)}>
          <div id="arrowAnim">
            <div class="arrowSliding">
              <div class="arrow"></div>
            </div>
            <div class="arrowSliding delay1">
              <div class="arrow"></div>
            </div>
            <div class="arrowSliding delay2">
              <div class="arrow"></div>
            </div>
            <div class="arrowSliding delay3">
              <div class="arrow"></div>
            </div>
          </div>
          Welcome to our website!
        </h1>
        {open && (
        <p>
We are a team of mental health professionals dedicated to helping people understand and manage their depression.
<br/> Our website offers a comprehensive depression test that can help you identify if you are suffering from depression and provide you with the resources and support you need to manage it.
<br/> Our test is designed to be easy to use, accurate, and reliable.
<br/>We also provide educational materials about depression, its causes, symptoms, and treatments.
<br/> Our goal is to help people recognize the signs of depression early on so they can get the help they need before it becomes a more serious problem.
<br/> We believe that everyone deserves access to quality mental health care, and we strive to make our website a safe space for anyone seeking information about depression.
<br/> Thank you for visiting our website!        </p>
        )

        }
        
      </div>
    </>

  )
}

export default Aboutc
