
const Cards = () => {
    const name = "Queen of Tears example"
    const  ratings = 8.2
    const summary = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


  return (
    <div>
      <div>
        <img src='https://images3.alphacoders.com/130/thumb-1920-1306841.jpg' className='w-[40%] h-[40%]' />
      </div>
      <h2> Name: {name} </h2>
      <h3> Ratings: {ratings} </h3>
      <p> {summary}
      </p>
    </div>
  )
}

export default Cards
