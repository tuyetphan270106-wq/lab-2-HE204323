import React from 'react';
import { MdClose } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

function MovieDetail({ movie, onClose, darkMode }) {
    if (!movie) return null;

    return (
        // Overlay
        <div
            onClick={onClose}
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.6)',
                zIndex: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Modal card - stop click propagation */}
            <div
                onClick={e => e.stopPropagation()}
                style={{
                    backgroundColor: darkMode ? '#16213e' : '#fff',
                    color: darkMode ? '#e0e0e0' : '#1a1a2e',
                    borderRadius: '16px',
                    padding: '36px',
                    width: '480px',
                    maxWidth: '90vw',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                    position: 'relative',
                    animation: 'fadeIn 0.25s ease',
                }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: darkMode ? '#aaa' : '#666',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <MdClose size={24} />
                </button>

                {/* Genre badge */}
                <span
                    style={{
                        display: 'inline-block',
                        padding: '3px 12px',
                        borderRadius: '20px',
                        backgroundColor: '#e94560',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: 700,
                        marginBottom: '12px',
                    }}
                >
                    {movie.genre}
                </span>

                {/* Title */}
                <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 800 }}>
                    {movie.title}
                </h2>

                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                    <FaStar color="#f5c518" />
                    <span style={{ fontWeight: 700, fontSize: '18px' }}>{movie.rating}</span>
                    <span style={{ color: darkMode ? '#888' : '#999', fontSize: '13px' }}>/10</span>
                </div>

                {/* Details grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '12px',
                        marginBottom: '20px',
                        padding: '16px',
                        borderRadius: '10px',
                        backgroundColor: darkMode ? '#0f3460' : '#f7f7f7',
                    }}
                >
                    <div>
                        <div style={{ fontSize: '12px', color: darkMode ? '#888' : '#999', marginBottom: '2px' }}>Đạo diễn</div>
                        <div style={{ fontWeight: 600 }}>{movie.director}</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '12px', color: darkMode ? '#888' : '#999', marginBottom: '2px' }}>Năm phát hành</div>
                        <div style={{ fontWeight: 600 }}>{movie.year}</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '12px', color: darkMode ? '#888' : '#999', marginBottom: '2px' }}>Thời lượng</div>
                        <div style={{ fontWeight: 600 }}>{movie.duration} phút</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '12px', color: darkMode ? '#888' : '#999', marginBottom: '2px' }}>Thể loại</div>
                        <div style={{ fontWeight: 600 }}>{movie.genre}</div>
                    </div>
                </div>

                {/* Description */}
                <p style={{ lineHeight: 1.7, color: darkMode ? '#ccc' : '#555', margin: 0 }}>
                    {movie.description}
                </p>

                {/* Close button at bottom */}
                <button
                    onClick={onClose}
                    style={{
                        marginTop: '24px',
                        width: '100%',
                        padding: '11px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: '#e94560',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '15px',
                    }}
                >
                    Đóng
                </button>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to   { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </div>
    );
}

export default MovieDetail;
