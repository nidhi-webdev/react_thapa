// Question 
import { useState } from 'react'

const UseState = () => {


    const [users, setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "Angles", age: 45 },
    ]);

    const userCount = users.length;
    console.log(userCount);
    


    return (
        <div>
            <h1> Users List </h1>

    

            <ul>
                {users.map((elem, idx) => {
                return <li key={idx}>
                    {elem.name} - {elem.age}
                </li>
                })}
            </ul>

        </div>
    )
}

export default UseState