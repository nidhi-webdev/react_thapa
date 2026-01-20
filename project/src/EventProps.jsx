export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`Hey ${user}`)
    }

    const handleHover = () => {
        alert("Thanks for Hovering me ")
    }

    return (<>
        <WelcomeUser onClick={() => HandleWelcomeUser("Nidhi")}
            onMouseEnter={handleHover}
        />
    </>)
}


// now the Child component will start

const WelcomeUser = (props) => {

    const handleGreeting = () => {
        console.log("I am from WelcomeUser Component");
        props.onClick();
        
    }
    
    
    return (
        <div className="m-10 ">
            <button className="bg-emerald-600 px-4 py-2 m-4 rounded" onClick={props.onClick}> Click </button>
            <button className="bg-amber-600 px-4 py-2 m-4 rounded" onClick={props.onMouseEnter}> Hover me </button>
            <button className="bg-sky-600 px-4 py-2 m-4 rounded" onClick={handleGreeting}> Greeting </button>
        </div>

    )
}