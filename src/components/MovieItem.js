import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

function MovieItem({ movie, isFavorite, prefer, detail, darkMode }) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: darkMode ? '#333' : 'white',
                border: '1px solid #ccc',
                borderRadius: '5px',
            }}
        >
            {/* Title | Genre | Year | Rating */}
            <span>
                {movie.title} | {movie.genre} | {movie.year} | {movie.rating}
            </span>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '8px' }}>
                <button
                    onClick={() => prefer(movie.id)}
                    style={{ cursor: 'pointer' }}
                >
                    {isFavorite ? <FaStar color="gold" /> : <FaRegStar />}
                    {' '}Yêu thích
                </button>

                <button
                    onClick={() => detail(movie.id)}
                    style={{ cursor: 'pointer' }}
                >
                    Chi tiết
                </button>
            </div>
        </div>
    );
}

export default MovieItem;
