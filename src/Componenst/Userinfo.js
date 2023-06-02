import React,{ useRef, useState } from "react";
import UserPic from "../assets/userinfo.png";
import "./Userinfo.css";

function Userinfo()
{
    const [open,setOpen] = useState(false);
    const menuRef = useRef();
    const imgRef = useRef();
     window.addEventListener('click', (e)=>{
         if(e.target !==menuRef.current && e.target !==imgRef.current){
             setOpen(false);
         }
     })
    return <div className="Usercon">
    <div className="user-icon" onClick={()=>setOpen(!open)} >
         <img src={UserPic} ref={imgRef} alt="user" width={"70%"} height={"70%"}/>
        </div> 
        {open && (
        <div className="Userlist">
            <ul ref={menuRef}>
                        <li onClick={()=>setOpen(false)}>
                           <a href="/account/my-account">Account</a>
                        </li>
                        <li onClick={()=>setOpen(false)}>
                           <a href="/">Logout</a>
                        </li>
            </ul>
            </div>  
        )

        }
    </div>;
}
export default Userinfo;