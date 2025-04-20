import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import '../css/Home.css';
import { searchMovies, getPopularMovies } from '../services/api';

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load popular movies initially
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const data = await getPopularMovies();
                setMovies(data);
                setLoading(false);
            } catch (err) {
                setError("Failed to load popular movies.");
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);

    // Debounced search effect
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            const fetchMovies = async () => {
                try {
                    setLoading(true);
                    if (searchQuery.trim() === "") {
                        const data = await getPopularMovies();
                        setMovies(data);
                    } else {
                        const data = await searchMovies(searchQuery);
                        setMovies(data);
                    }
                    setError(null);
                } catch (err) {
                    setError("Failed to search movies.");
                } finally {
                    setLoading(false);
                }
            };
            fetchMovies();
        }, 500); // 500ms debounce delay

        return () => clearTimeout(delayDebounce);
    }, [searchQuery]);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className='home'>
            <form className='search-form' onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder='Search for a movie...'
                    className='search-input'
                    value={searchQuery}
                    onChange={handleInputChange}
                />
            </form>

            {error && <div className='error-message'>Error: {error}</div>}

            {loading ? (
                <div className='loading'>Loading...</div>
            ) : (
                <>
                    {movies.length === 0 ? (
                        <div className='no-results'>No movies found.</div>
                    ) : (
                        <div className='movies-grid'>
                            {movies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Home;
