import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);

    async function getDetails() {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const movieDetails = await response.json();
        console.log(movieDetails);
        setDetails(movieDetails.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getDetails();
    }, []);

    return (
        <div>
            <h1>Detail</h1>
            <h2>
                {loading ? (
                    'loading...'
                ) : (
                    <div>
                        <h1>{details.title} </h1>
                        <img src={details.medium_cover_image}></img>
                        <h2>Rating: {details.rating}</h2>
                        <h2>Runtime: {details.runtime}</h2>
                        <h1>
                            <Link to={`/`}>Home</Link>
                        </h1>
                    </div>
                )}
            </h2>
        </div>
    );
}
export default Detail;
