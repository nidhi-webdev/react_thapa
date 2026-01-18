

const CardsItem = (props) => {
    console.log("From CardItem", props);


    const { img, name, rating, description, genre, cast, watch_url  } = props.data;

    return (

        <div className="m-4">
            <div>
                <img src={img} className='w-[40%] h-[40%]' alt={name} />
            </div>
            <h2> Name: {name} </h2>
            <h3> Ratings: {rating} </h3>
            <p> Description: {description}</p>
            <p>Gerne: {genre} </p>
            <p> Cast: {cast ? cast.join(', ') : ''} </p>
            <a href={watch_url} target='_blank' rel="noopener noreferrer">
                <button className="bg-emerald-600 px-4 py-2 rounded"> Watch Now </button>
            </a>
        </div>

    )
}

export default CardsItem
