import React, { useCallback, useState } from 'react'
import ChildUseCallBack from './ChildUseCallBack'

const UseCallBack = () => {
    const [count, setCount]=useState(0)

    const handleClick =()=>{
        setCount(count+1)

    }   

    

  return (
    <div>
        <h1>UseCallBack Hook</h1>
        <p>count is {count}</p>
        <ChildUseCallBack onClick={handleClick}/>
    </div>
  )
}

export default UseCallBack