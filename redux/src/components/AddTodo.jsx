import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
  const [text, setText] = useState(null)

  const dispatch = useDispatch()


  const handleTodoSumit = (e) => {
    e.preventDefault()
    dispatch(addTodo(text))
    setText('')
  }

  

  return (
    <div>
      <form onSubmit={handleTodoSumit}>
        <input type="text" placeholder='Enter Here' onChange={(e) => setText(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddTodo