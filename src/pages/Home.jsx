import { Link } from "react-router-dom";

const Home = () => {
    const films = ["Coco", "Finding-Nemo", "Toy-Story"]

    return (
        <>
            {/* Use the link to navigate to the page using the films ID as the destination url */}
            {films.map((film, i) => {
                return <Link key={i} to={`/${film}`} >{film}</Link>
            })}
        </>
    )
}

export default Home;
