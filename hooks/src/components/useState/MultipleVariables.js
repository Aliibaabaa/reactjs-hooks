import React, {useState} from 'react';

const MultipleVariables = () => {
    const[count, setCount] = useState(0);
    const[name, setName] = useState('');

  return (
    <div>
        <p> {name}, you clicked {count} times! </p>
        <input type='text' placeholder='Enter your name' value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count + 1)}> Click Me </button>
    </div>
  )
}

export default MultipleVariables