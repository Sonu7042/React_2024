import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {
    const divRef=useRef()
    const inputRef=useRef()
    
    useEffect(()=>{
        inputRef.current.value="ram"
    })

    useLayoutEffect(()=>{
        const getDivRefCurrent=divRef.current
        getDivRefCurrent.style.opacity=0

        setTimeout(() => {
            getDivRefCurrent.style.opacity=1
            getDivRefCurrent.style.color="red"
            getDivRefCurrent.style.backgroundColor="pink"
            
        }, 2000);

        console.log(inputRef.current.value)


    }, [])

  

  return (
    <div>
        <h1>UseLayoutEffect</h1>
        <div ref={divRef} >this is text</div>
        <input ref={inputRef} type="text" value={'sonu'} readOnly />
    </div>
  )
}

export default UseLayoutEffect