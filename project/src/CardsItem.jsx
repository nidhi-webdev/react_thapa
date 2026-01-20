const CardsItem = ({ data }) => {
    const { img, name, rating, description, genre, cast, watch_url } = data;

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center m-4 max-w-xs">
            <div className="w-full flex items-center justify-center bg-gray-100">
                <img src={img} className="object-cover w-full h-48" alt={name} />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between w-full">
                <div>
                    <h2 className="text-2xl font-bold mb-2 text-emerald-700">{name}</h2>
                    <h3 className="text-lg font-semibold mb-2 text-gray-600">Rating: <span className="text-yellow-500">{rating}</span></h3>
                    <p className="mb-2 text-gray-700">{description}</p>
                    <p className="mb-1"><span className="font-semibold">Genre:</span> <span className="text-emerald-600">{genre ? genre.join(', ') : ''}</span></p>
                    <p className="mb-4"><span className="font-semibold">Cast:</span> <span className="text-gray-800">{cast ? cast.join(', ') : ''}</span></p>
                </div>
                <a href={watch_url} target="_blank" rel="noopener noreferrer">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded shadow transition duration-200">
                        Watch Now
                    </button>
                </a>
            </div>
        </div>
    );
}

export default CardsItem
