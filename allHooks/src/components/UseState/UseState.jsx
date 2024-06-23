import React, { useState } from 'react'

const UseState = () => {
    const [toggleText, setToggleText] = useState(true)


    function ClickHandle() {
        setToggleText(!toggleText)
      }

  return (
    <div>
        <h1>UseState Hooks</h1>
        <div>
            {toggleText? <p>Hello World</p>:null}
    
          <button onClick={ClickHandle}>Click</button>

        </div>

      </div>

  )
}

export default UseState