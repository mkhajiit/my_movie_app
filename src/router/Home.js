import { useState, useEffect } from 'react';
import Movie from '../components/Movies';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        //await를 사용해 비동기적으로 값을 받아와서 json에 값이 할당될때까지 기다려야 setMovies,setLoading등의 함수가 에러없이 실행된다
        const response = await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        );
        const json = await response.json();
        console.log(json);
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            <h1>Movie</h1>
            <h2>
                {loading ? (
                    'loading...'
                ) : (
                    <div>
                        {movies.map((movie) => (
                            <Movie
                                id={movie.id}
                                key={movie.id}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </h2>
        </div>
    );
}

export default Home;
