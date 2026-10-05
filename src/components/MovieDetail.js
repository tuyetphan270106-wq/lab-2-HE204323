import React from 'react';

function MovieDetail({ movie, onClose, darkMode }) {
    if (!movie) return null;

    return (

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
                        fontSize: '22px',
                        lineHeight: 1,
                    }}
                >
                    ×
                </button>


                <span

                >
                    {movie.genre}
                </span>


                <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 800 }}>
                    {movie.title}
                </h2>


                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                    <span>&#9733; {movie.rating}</span>
                    <span style={{ color: darkMode ? '#888' : '#999', fontSize: '13px' }}>/10</span>
                </div>


                <div>
                    <div>
                        Đạo diễn: {movie.director}
                    </div>
                    <div>
                        Năm phát hành: {movie.year}
                    </div>
                    <div>
                        Thời lượng: {movie.duration} phút
                    </div>
                    <div>
                        Thể loại: {movie.genre}
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
