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
    
   const avgUser = users.reduce((acc, curr) => acc + curr.age, 0) / userCount;
    


    return (
        <div>
            <h1> Users List </h1>

    

            <ul>
                {users.map((elem, idx) => {
                return <li key={idx}>
                {elem.name}  is {elem.age} years of old
                </li>
                })}
            </ul>

            <p> Avrage :  {avgUser} </p>

           

        </div>
    )
}

export default UseState