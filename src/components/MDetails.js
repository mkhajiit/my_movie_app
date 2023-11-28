import { Link } from 'react-router-dom';

function Mdetail({ title, medium_cover_image, rating, runtime }) {
    return (
        <div>
            <h1>{title} </h1>
            <img src={medium_cover_image}></img>
            <h2>Rating: {rating}</h2>
            <h2>Runtime: {runtime}</h2>
            <h1>
                <Link to={`/`}>Home</Link>
            </h1>
        </div>
    );
}

export default Mdetail;
