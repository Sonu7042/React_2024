import React from 'react'
import  { useCallback, useState } from 'react';

const Check = () => {
  const [count, setCount] = useState(0);

//   Without useCallback
//   const handleClick = () => {
//     console.log('Button clicked');
//   };



  // With useCallback
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); 


  return (
    <div>
      <p className='text-white'>Count</p>
      <button className='text-white bg-pink-500' onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Check;

 

