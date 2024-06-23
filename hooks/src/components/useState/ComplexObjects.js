import React, {useState} from 'react'

const ComplexObjects = () => {
    const [user, setUser] = useState({name: '', age: 0});

    const updateName = (e) => {
        setUser(prevUser => ({
            ...prevUser,
            name: e.target.value
        }));
    };

    const incrementAge = () => {
        setUser(prevUser => ({
            ...prevUser,
            age: prevUser.age + 1
        }));
    };
    
  return (
    <div>
        <input type='text' value={user.name} onChange={updateName} placeholder='Enter your name'/>

        <p>{user.name} is {user.age} years old</p>
            <button onClick={incrementAge}>
                Increment Age
            </button>
    </div>
  )
}

export default ComplexObjects