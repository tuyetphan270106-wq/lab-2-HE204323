import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { MdInfoOutline } from 'react-icons/md';

function MovieItem({ movie, isFavorite, prefer, detail, darkMode }) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                borderRadius: '10px',
                border: darkMode ? '1px solid #333' : '1px solid #e0e0e0',
                backgroundColor: darkMode ? '#16213e' : '#fff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.07)',
                transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.13)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.07)';
            }}
        >
            {/* Movie info */}
            <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>
                    {movie.title}
                </div>
                <div style={{ fontSize: '13px', color: darkMode ? '#aaa' : '#666', display: 'flex', gap: '12px' }}>
                    <span>🎭 {movie.genre}</span>
                    <span>📅 {movie.year}</span>
                    <span>⭐ {movie.rating}</span>
                </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <button
                    onClick={() => prefer(movie.id)}
                    title={isFavorite ? 'Bỏ yêu thích' : 'Thêm yêu thích'}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '7px 14px',
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '13px',
                        backgroundColor: isFavorite ? '#e94560' : darkMode ? '#2a2a4a' : '#f0f0f0',
                        color: isFavorite ? '#fff' : darkMode ? '#e0e0e0' : '#333',
                        transition: 'all 0.2s',
                    }}
                >
                    {isFavorite ? <FaStar size={14} /> : <FaRegStar size={14} />}
                    {isFavorite ? 'Đã thích' : 'Yêu thích'}
                </button>

                <button
                    onClick={() => detail(movie.id)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '7px 14px',
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '13px',
                        backgroundColor: darkMode ? '#0f3460' : '#1a1a2e',
                        color: '#fff',
                        transition: 'all 0.2s',
                    }}
                >
                    <MdInfoOutline size={16} />
                    Chi tiết
                </button>
            </div>
        </div>
    );
}

export default MovieItem;
