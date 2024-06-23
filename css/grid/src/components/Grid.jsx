import React from 'react'
import '../css/Grid.css'

const Grid = () => {
  return (
    <div className='container1'>
        <div className="item1 container-1" id='item1'>box 1</div>

        <div className="item1 container-2" id='item2'>
          <div className="item2">Dhaba1 1</div>
          <div className="item2">Dhaba1 2</div>

        </div>
        <div className="item1 container-3" id='item3'>
          <div className="item3">Dhaba 1</div>
          <div className="item3">Dhaba 2</div>
          <div className="item3">Dhaba 3</div>
        </div>
        <div className="item1 container-4" id='item4'>
          <div className="item4"> Dhaba 1</div>
          <div className="item4"> Dhaba 2</div>
          <div className="item4"> Dhaba 3</div>
          <div className="item4"> Dhaba 4</div>
        </div>
        <div className="item1 container-5" id='item5'>
          <div className="item5">Dhaba 1</div>
          <div className="item5">Dhaba 2</div>
          <div className="item5">Dhaba 3</div>
          <div className="item5">Dhaba 4</div>
          <div className="item5">Dhaba 5</div>
        </div>
        <div className="item1 container-6" id='item6'>
          <div className="item6"> Dhaba 1</div>
          <div className="item6"> Dhaba 2</div>
          <div className="item6"> Dhaba 3</div>
          <div className="item6"> Dhaba 4</div>
          <div className="item6"> Dhaba 5</div>
          <div className="item6"> Dhaba 6</div>
        </div>

      
    </div>
  )
}

export default Grid