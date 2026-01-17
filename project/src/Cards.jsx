import Data from './api/Data'



const Cards = () => {


    return (
        <div className="m-4">
            <div>
                <img src={Data[0].img} className='w-[40%] h-[40%]' />
            </div>
            <h2> Name: {Data[0].name} </h2>
            <h3> Ratings: {Data[0].rating} </h3>
            <p> Description: {Data[0].description}</p>
            <p>Gerne: {Data[0].genre} </p>
            <p> Cast: {Data[0].cast} </p>
            <a href={Data[0].watch_url} target='_blank'> 
            <button className="bg-emerald-600 px-4 py-2 rounded"> Watch Now </button>
            </a>
        </div>
    )
}

export default Cards
