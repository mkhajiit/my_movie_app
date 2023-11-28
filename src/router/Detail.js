import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Mdetail from '../components/MDetails';

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
                    <Mdetail
                        title={details.title}
                        medium_cover_image={details.medium_cover_image}
                        rating={details.rating}
                        runtime={details.runtime}
                    />
                )}
            </h2>
        </div>
    );
}
export default Detail;
