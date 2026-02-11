
const HowNotToFetchApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))


    return (
        <div>
            <ul> data: </ul>
        </div>
    )
}

export default HowNotToFetchApi
