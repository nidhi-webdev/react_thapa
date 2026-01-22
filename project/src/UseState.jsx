// Question 


const UseState = () => {

    const users = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "Angles", age: 45 },
    ];

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
