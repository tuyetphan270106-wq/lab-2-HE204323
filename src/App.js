import React, { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import useLocalStorage from './hooks/useLocalStorage';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import { movies as allMovies } from './datas/movies';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All Genres');
  const [sortOption, setSortOption] = useState('default');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const toggleTheme = () => setDarkMode(prev => !prev);

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const handleDetail = (id) => {
    const movie = allMovies.find(m => m.id === id);
    setSelectedMovie(movie);
  };

  const closeDetail = () => setSelectedMovie(null);

  // Filter + search + sort
  let displayedMovies = allMovies.filter(movie => {
    const matchSearch = movie.title.toLowerCase().includes(search.toLowerCase());
    const matchGenre = genre === 'All Genres' || movie.genre === genre;
    return matchSearch && matchGenre;
  });

  if (sortOption === 'high') {
    displayedMovies = [...displayedMovies].sort((a, b) => b.rating - a.rating);
  } else if (sortOption === 'low') {
    displayedMovies = [...displayedMovies].sort((a, b) => a.rating - b.rating);
  }

  const themeStyle = {
    minHeight: '100vh',
    backgroundColor: darkMode ? '#1a1a2e' : '#f0f2f5',
    color: darkMode ? '#e0e0e0' : '#222',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <ThemeContext.Provider value={{ darkMode }}>
      <div style={themeStyle}>
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <SearchBar search={search} setSearch={setSearch} />

          <GenreFilter genre={genre} setGenre={setGenre} sortOption={sortOption} setSortOption={setSortOption} darkMode={darkMode} />

          <div style={{ textAlign: 'center', padding: '10px 0', fontSize: '15px', fontWeight: 600, color: darkMode ? '#aaa' : '#555' }}>
            Total Movies: {displayedMovies.length}
          </div>

          <MovieList
            movies={displayedMovies}
            favorites={favorites}
            prefer={toggleFavorite}
            detail={handleDetail}
            darkMode={darkMode}
          />
        </div>

        {selectedMovie && (
          <MovieDetail movie={selectedMovie} onClose={closeDetail} darkMode={darkMode} />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
