import React, { useEffect, useRef } from 'react'

const UseRef = () => {
    const countValue=useRef(0)
    const divRef=useRef()
    const inputRef=useRef()



     //this is second way to use 
    useEffect(()=>{
        const getDivRef=divRef.current
        console.log(getDivRef)
    }, [])


     //this is third way to use 
    useEffect(()=>{
        inputRef.current.focus()
       
    })
    

    //this is first way to use 
    const handleClick=()=>{
        countValue.current++
        console.log(countValue.current)
    }
  return (
    <div>
       <h1>UseRef Hooks</h1>
       <button onClick={handleClick}>Click Me</button>
       <div ref={divRef} className='hello'></div>
       <input ref={inputRef} type="text" placeholder='Enter some text..' />
       {/* <button onClick={()=> inputRef.current.select()}>select</button> */}
    </div>
  )
}

export default UseRef