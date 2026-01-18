

const CardsItem = (props) => {
console.log("From CardItem", props);



    return (

        <div className="m-4">
            <div>
                <img src={props.elem.img} className='w-[40%] h-[40%]' alt={props.elem.name} />
            </div>
            <h2> Name: {props.elem.name} </h2>
            <h3> Ratings: {props.elem.rating} </h3>
            <p> Description: {props.elem.description}</p>
            <p>Gerne: {props.elem.genre} </p>
            <p> Cast: {props.elem.cast ? props.elem.cast.join(', ') : ''} </p>
            <a href={props.elem.watch_url} target='_blank' rel="noopener noreferrer">
                <button className="bg-emerald-600 px-4 py-2 rounded"> Watch Now </button>
            </a>
        </div>

    )
}

export default CardsItem
