# Movie Favorites App

A responsive web application that allows users to browse and favorite movies, built with React.

## Features

- Browse popular movies with dynamic loading
- Search for movies by title
- View movie details including poster, description, rating, and release date
- Add movies to favorites
- Manage favorites (view and remove)
- Responsive design that works on desktop and mobile devices
- Local storage persistence for favorites

## Tech Stack

- **React**: JavaScript library for building user interfaces
- **CSS**: Custom styling with responsive design
- **Local Storage API**: For persisting favorites data
- **TMDb API**: For movie data


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PresidentLivingstone/react-movie-app.git
   cd movie-favorites-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your TMDb API key:
   ```
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

### Browsing Movies
- The homepage displays a grid of popular movies
- Scroll down to load more movies
- Use the search bar to find specific movies

### Managing Favorites
- Click the heart icon on a movie card to add it to favorites
- Navigate to the Favorites page to view all your favorited movies
- Click the "Unfavorite" button on the Favorites page to remove a movie from your favorites

## Responsive Design

The application is designed to be fully responsive:
- Desktop: Displays a grid of movie cards with detailed information
- Tablet: Adjusts the grid layout for medium-sized screens
- Mobile: Single-column layout with optimized card size for easy viewing

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

- Movie data provided by [The Movie Database (TMDb)](https://www.themoviedb.org/)
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)