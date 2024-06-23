import React, { useReducer } from 'react'



const initialState = {
    count: 0,
    showCheck: true
}

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                count: state.count + 1
            }
        case 'sub':
            return {
                ...state,
                count: state.count - 1
            }
        case 'reset':
            return {
                ...state,
                count: state.count = 0
            }
        case 'show':
            return {
                ...state,
                showCheck: !state.showCheck 
            }
        default:
            return state

    }
    
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state);



    return (
        <div>
            <h1>UseReducer Hook</h1>
            {state.showCheck===true?<h3>Count is {state.count}</h3>:null}
            
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>

                <button onClick={() => dispatch({ type: "add" })}>Increase Count</button>
                <button onClick={() => dispatch({ type: "sub" })}>decrease Count</button>
                <button onClick={() => dispatch({ type: "reset" })}>reset Count</button>
                <button onClick={() => dispatch({ type: "show" })}>show Count</button>
            </div>
        </div>
    )
}

export default UseReducer