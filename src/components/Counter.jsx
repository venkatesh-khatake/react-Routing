import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    function incCount(){
        setCount(count++);
    }
  return (
    <div>
      <h1>Counter</h1>
      <h2>Count : {count}</h2>
      <button onClick={incCount}>Increase Count</button>
    </div>
  )
}

export default Counter
