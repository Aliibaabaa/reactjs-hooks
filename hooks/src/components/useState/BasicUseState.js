import React, {useState} from 'react';

function BasicUseState() {
    //Declare a state variable named 'count' andd a function 'setCount' to update it.
    const [count, setCount] = useState(0);

    return(
        <div>
            <p> You clicked {count} times. </p>
            <button onClick={() => setCount(count + 1)}> Click Me </button>
        </div>
    );
}

export default BasicUseState;