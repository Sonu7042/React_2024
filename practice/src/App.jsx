import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail]=useState(null)
  const [password, setPassword]=useState(null)
  const [show, setShow]=useState(false)

  function submitHandle(){
    setShow(true)
    // console.log(email)
    // console.log(password);
    
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', height: '100vh', margin: 'none', padding: 'none' }}>
        <div className='size-80 bg-blue-100 rounded '>
          <input className='border-2 mt-10' type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} /> 
          <br />
          <br />

          <input className='border-2' type="password" placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)}/>
          <br />
          <br />

          <button className='border-2 bg-pink-500' onClick={submitHandle}>Submit</button>

          {show===true? <div><p> User Email : {email}</p> <br /> <p>User password {password}</p></div>   :null}

         

        </div>

      </div>
    </>
  )
}

export default App
