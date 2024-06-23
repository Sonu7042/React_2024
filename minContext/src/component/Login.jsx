import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const context= useContext(UserContext)
    const {setUser}=context

    const [username, setusername]=useState("")
    const [password, setpassword]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username, password})

    }
    
  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} placeholder='username' onChange={(e)=>setusername(e.target.value)} />
        {" "}
        <input type="password"  value={password}placeholder='password' onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        

    </div>
  )
}

export default Login