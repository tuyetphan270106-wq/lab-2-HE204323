import React from 'react';
import MovieItem from './MovieItem';

function MovieList({ movies, favorites, prefer, detail, darkMode }) {
    if (movies.length === 0) {
        return (
            <p style={{ textAlign: 'center', color: '#999', padding: '40px 0', fontSize: '16px' }}>
                Không tìm thấy bộ phim nào.
            </p>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '40px' }}>
            {movies.map((movie) => (
                <MovieItem
                    key={movie.id}
                    movie={movie}
                    isFavorite={favorites.includes(movie.id)}
                    prefer={prefer}
                    detail={detail}
                    darkMode={darkMode}
                />
            ))}
        </div>
    );
}

export default MovieList;
