import Data from './api/Data'



const Cards = () => {
    return (
        <>
            {Data.map((elem, idx) => {
                return (
                    <div className="m-4" key={idx}>
                        <div>
                            <img src={elem.img} className='w-[40%] h-[40%]' />
                        </div>
                        <h2> Name: {elem.name} </h2>
                        <h3> Ratings: {elem.rating} </h3>
                        <p> Description: {elem.description}</p>
                        <p>Gerne: {elem.genre} </p>
                        <p> Cast: {elem.cast ? elem.cast.join(', ') : ''} </p>
                        <a href={elem.watch_url} target='_blank' rel="noopener noreferrer"> 
                            <button className="bg-emerald-600 px-4 py-2 rounded"> Watch Now </button>
                        </a>
                    </div>
                )
            })}
        </>
    );
}

export default Cards
