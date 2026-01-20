export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`Hey ${user}`)
    }

    const handleHover = () => {
        alert("Thanks for Hovering me ")
    }

    return (<>
        <WelcomeUser onclick={() => HandleWelcomeUser("Nidhi")}
            onMouseEnter={handleHover}
        />
    </>)
}


// now the Child component will start

const WelcomeUser = (props) => {
    return (
        <>
            <button> Click </button>
            <button> Hover me </button>
            <button> Greeting </button>
        </>

    )
}