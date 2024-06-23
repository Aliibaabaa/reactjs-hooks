import React, {useState} from 'react';

function FunctionUpdaters() {
    const initialCount = () => {
        console.log('Calculating initial count...');
        return 0;
    };

    const [count, setCount] = useState(initialCount);
    
    return(
        <div>
            <p> You clicked {count} times!</p>
            <button onClick={() => setCount(count + 1)}> Click Me </button>
        </div>
    )
}

export default FunctionUpdaters;