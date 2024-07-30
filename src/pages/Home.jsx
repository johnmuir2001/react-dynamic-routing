import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await fetch("https://ghibliapi.vercel.app/films")
            const data = await res.json();
            setFilms(data)
        }
        fetchAPI()
    }, [])

    return (
        <>
            {films.length === 0 && <h1>Loading...</h1>}
            {/* Use the link to navigate to the page using the films ID as the destination url */}
            {films.map((film, i) => {
                return <Link key={i} to={`/${film.id}`} >{film.title}</Link>
            })}
        </>
    )
}

export default Home;