import React, { useState, useEffect } from 'react';
import '../css/Favorites.css';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Retrieve saved favorites from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Function to remove a movie from favorites
  const removeFromFavorites = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className='favorites'>
      {favorites.length === 0 ? (
        <div className='favorites-empty'>
          <h2>No Favorite Movies Yet</h2>
          <p>Start adding movies to your favorites list!</p>
        </div>
      ) : (
        <div className='favorites-list'>
          <h2>Your Favorite Movies</h2>
          <div className='favorites-grid'>
            {favorites.map((movie) => (
              <div key={movie.id} className='favorite-item'>
                <MovieCard movie={movie} />
                <button
                  className='remove-btn'
                  onClick={() => removeFromFavorites(movie.id)}
                >
                  Unfavorite
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;