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