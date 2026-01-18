

const CardsItem = (props) => {
    console.log("From CardItem", props);


    const { data } = props;

    return (

        <div className="m-4">
            <div>
                <img src={data.img} className='w-[40%] h-[40%]' alt={data.name} />
            </div>
            <h2> Name: {data.name} </h2>
            <h3> Ratings: {data.rating} </h3>
            <p> Description: {data.description}</p>
            <p>Gerne: {data.genre} </p>
            <p> Cast: {data.cast ? data.cast.join(', ') : ''} </p>
            <a href={data.watch_url} target='_blank' rel="noopener noreferrer">
                <button className="bg-emerald-600 px-4 py-2 rounded"> Watch Now </button>
            </a>
        </div>

    )
}

export default CardsItem
