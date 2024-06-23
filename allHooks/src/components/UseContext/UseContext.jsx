import React, { useContext } from 'react'
import { GlobalContext } from './Index'


const UseContext = () => {
  const getUseContext=useContext(GlobalContext)
  const {theme, setTheme}=getUseContext
  console.log(theme)


  return (
    <div>
        <h1>UseContext Hook</h1>
        <button style={{backgroundColor:'yellow'}} onClick={()=>setTheme(theme==='light'?'dark':'light')}>Change Theme</button>
        <div>
          <h2>Login Register</h2>
          <button style={theme==='dark'? {backgroundColor:'black', color:"white", margin:"5px"} : { backgroundColor:'yellow', color:'black', margin:"5px"}}>Login</button>
          <button style={theme==='dark'? {backgroundColor:'black', color:"white", margin:"5px"} : { backgroundColor:'yellow', color:'black', margin:"5px"}}>Register</button>
        </div>
    </div>
  )
}

export default UseContext