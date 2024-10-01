import { useParams } from "react-router-dom";

const Film = () => {
    // the useParams hook from react router DOM gets the unknown value from the url
    const { filmName } = useParams();

    return (
        <>
            <h1>Film Page</h1>
            <br />
            <h3>Film Title: {filmName}</h3>
        </>
    )
}

export default Film;
