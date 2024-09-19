import React, { useContext, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

function Login({setLogin}) {

  const {url,setToken} = useContext(StoreContext)

  const [currentState, setCurrentState] = useState("Login")
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async (event) =>{
    event.preventDefault()
    let newUrl = url;
    if (currentState==="Login") {
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl,data);

    if (response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setLogin(false)
    }
    else{
      alert(response.data.message);
    }

  }

  return (
    <div className='login'>
        <form onSubmit={onLogin} className="login-container">
          <div className="login-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-input">
          {currentState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required/>}
            
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required/>
          </div>
          <button type='submit'>{currentState==="Sign Up"?"Create account":"Login"}</button>
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