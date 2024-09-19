import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

function Login({setLogin}) {

  const [currentState, setCurrentState] = useState("Login")

  return (
    <div className='login'>
        <form action="" className="login-container">
          <div className="login-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-input">
          {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
            
            <input type="email" placeholder='Your Email' required/>
            <input type="password" placeholder='Password' required/>
          </div>
          <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
          <div className="login-cndtn">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          {currentState==="Login"
          ?<p>Create a new Account?<span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>
          :<p>Already have an Account?<span onClick={()=>setCurrentState("Login")}>Login Here</span></p>}
          
          
        </form>
    </div>
  )
}

export default Login