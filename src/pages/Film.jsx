import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Film = () => {
    const [filmInfo, setFilmInfo] = useState({});

    // the useParams hook from react router DOM gets the unknown value from the url
    const { productId } = useParams();

    useEffect(() => {
        const fetchAPI = async () => {
            // use the parameter from the url to make a fetch request for a specific film
            const res = await fetch(`https://ghibliapi.vercel.app/films/${productId}`)
            const data = await res.json();
            setFilmInfo(data)
            console.log(data)
        }
        fetchAPI()
    }, [])

    return (
        <>
            <h1>Film Page</h1>
            <h2>Film ID: {productId}</h2>
            <br />
            {filmInfo.title === undefined && <h1>Loading...</h1>}
            <h3>{filmInfo.title}</h3>
            <h3>{filmInfo.description}</h3>
            <img src={filmInfo.image} alt="movie poster" />
        </>
    )
}

export default Film;