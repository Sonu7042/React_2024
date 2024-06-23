import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount]=useState(0)
    const [showText, setShowText]=useState(false)

    useEffect(()=>{
      if(count===5)setShowText(true)
          
    }, [count])
  return (
    <div>
        <h1>UseEffect Hooks</h1>
        <div>
            <p>Count is {count}</p>
             {showText? <p>Hello World</p>:null}
            <button onClick={()=>setCount(count+1)}>Btn</button>
        </div>
    </div>
  )
}

export default UseEffect