import React, {useSate, useState} from 'react'

const PreviousState = () => {
    const [count, setCount] = useState(0);

  return (
    <div>
        <p> You clicked {count} times! </p>
        <button onClick={() => setCount(prevCount => prevCount + 1)}> Click Me </button>
    </div>
  )
}

export default PreviousState