import React, { useMemo, useState } from 'react';



const ExpensiveComponent = ({ a, b }) => {
  const memoizedValue = useMemo(() => {
    // Expensive calculation based on 'a' and 'b'
    return a * b;
  }, [a,b]);

  return (
    <div>
      <p>Result: {memoizedValue}</p>
    </div>
  );
};

const UseMemo = () => {

  const [valueA, setValueA] = useState(5);
  const [valueB, setValueB] = useState(10);
  console.log(`A = ${valueA}     B = ${valueB}`)

  return (
    <div>
      <ExpensiveComponent a={valueA} b={valueB} />
      <button onClick={() => setValueA(valueA + 1)}>Increment A</button>
      <button onClick={() => setValueB(valueB + 1)}>Increment B</button>
    </div>
  );
};

export default UseMemo;
