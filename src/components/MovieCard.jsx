import React, { useState, useEffect } from 'react';
import '../css/MovieCard.css';

function MovieCard({ movie }) {
  const [isFavourite, setIsFavourite] = useState(false);

  // Check if the movie is already in favourites
  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setIsFavourite(favourites.some(fav => fav.id === movie.id));
  }, [movie.id]);

  const addToFavourites = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const alreadyFav = favourites.some(fav => fav.id === movie.id);

    if (!alreadyFav) {
      favourites.push(movie);
      localStorage.setItem('favourites', JSON.stringify(favourites));
      setIsFavourite(true);
      // alert(`${movie.title} added to favourites!`);
    } else {
      alert(`${movie.title} is already in your favourites!`);
    }
  };

  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title} 
        />
        <div className='movie-overlay'>
          <button 
            className={`favorite-btn ${isFavourite ? 'favourited' : ''}`} 
            onClick={addToFavourites}
            disabled={isFavourite}
            title={isFavourite ? "Already in favourites" : "Add to favourites"}
          >
            {isFavourite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className='movie-info'>
        <h3 className='movie-title'>{movie.title}</h3>
        <p className='movie-description'>{movie.overview}</p>
        <p className='user-rating'>Rating: {movie.vote_average} ⭐</p>
        <p className='movie-release-date'>Release: {movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
