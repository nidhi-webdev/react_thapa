import Data from './api/Data'
import CardsItem from './CardsItem'

const Cards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {Data.map((item, idx) => (
                <CardsItem key={idx} data={item} />
            ))}
        </div>
    );
}

export default Cards
