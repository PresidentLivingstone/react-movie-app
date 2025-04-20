import { createContext, useEffect, useState, useContext } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '9fac8fb4ed7bbed67aa88558733d5515 '; // Replace with your actual API key

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        if (!res.ok) throw new Error("Failed to fetch movies.");
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [API_KEY]);

  return (
    <MovieContext.Provider value={{ movies, loading, error }}>
      {children}
    </MovieContext.Provider>
  );
};

// Optional custom hook for ease of use
export const useMovieContext = () => useContext(MovieContext);
