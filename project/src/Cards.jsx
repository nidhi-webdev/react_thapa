import Data from './api/Data'
import CardsItem from './CardsItem'



const Cards = () => {
    return (
        <>
            {Data.map((elem, idx) => (
                <CardsItem key={idx} elem={elem} />
            )
                   
               
            )}
        </>
    );
}

export default Cards
