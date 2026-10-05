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

          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', padding: '10px 0', fontSize: '15px', fontWeight: 600, color: darkMode ? '#aaa' : '#555' }}>
            Total Movies: {displayedMovies.length} |
            Favorites: {favorites.length}
          </div>

          <MovieList
            movies={displayedMovies}
            favorites={favorites}
            prefer={toggleFavorite}
            detail={handleDetail}
            darkMode={darkMode}
          />

          {/* Danh sách phim yêu thích từ localStorage
          {favorites.length > 0 && (
            <div style={{
              marginTop: '30px',
              padding: '20px',
              backgroundColor: darkMode ? '#2a2a3e' : '#fff8e1',
              borderRadius: '10px',
              border: `2px solid ${darkMode ? '#f5a623' : '#f0c040'}`,
            }}>
              <h3 style={{
                marginBottom: '14px',
                fontSize: '18px',
                fontWeight: 700,
                color: darkMode ? '#f5a623' : '#d48800',
              }}>
                ⭐ Phim Yêu Thích ({favorites.length})
              </h3>
              {allMovies
                .filter(m => favorites.includes(m.id))
                .map(m => (
                  <div
                    key={m.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 14px',
                      marginBottom: '8px',
                      backgroundColor: darkMode ? '#333' : '#fffde7',
                      borderRadius: '6px',
                      border: `1px solid ${darkMode ? '#555' : '#ffe082'}`,
                    }}
                  >
                    <span>
                      <strong>{m.title}</strong> | {m.genre} | {m.year} | ⭐ {m.rating}
                    </span>
                    <button
                      onClick={() => toggleFavorite(m.id)}
                      style={{
                        cursor: 'pointer',
                        background: 'none',
                        border: '1px solid #f5a623',
                        borderRadius: '4px',
                        padding: '4px 10px',
                        color: '#f5a623',
                        fontWeight: 600,
                      }}
                    >
                      ✕ Bỏ yêu thích
                    </button>
                  </div>
                ))
              }
            </div>
          )} */}
        </div>

        {selectedMovie && (
          <MovieDetail movie={selectedMovie} onClose={closeDetail} darkMode={darkMode} />
        )}
      </div>
    </ThemeContext.Provider >
  );
}

export default App;
