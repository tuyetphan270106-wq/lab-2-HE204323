import React from 'react';

const selectStyle = (darkMode) => ({
    padding: '8px 12px',
    fontSize: '14px',
    border: '1.5px solid #ccc',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: darkMode ? '#2a2a4a' : '#fff',
    color: darkMode ? '#e0e0e0' : '#222',
    outline: 'none',
});

function GenreFilter({ genre, setGenre, sortOption, setSortOption, darkMode }) {
    const genres = ['All Genres', 'Action', 'Animation', 'Comedy', 'Drama', 'Romance', 'Sci-Fi'];

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '10px 0 16px 0',
                flexWrap: 'wrap',
            }}
        >
            {/* Genre Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <label style={{ fontWeight: 600, fontSize: '15px' }}>Genre:</label>
                <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    style={selectStyle(darkMode)}
                >
                    {genres.map(g => (
                        <option key={g} value={g}>{g}</option>
                    ))}
                </select>
            </div>

            {/* Sort by Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <label style={{ fontWeight: 600, fontSize: '15px' }}>Sort by Rating:</label>
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    style={selectStyle(darkMode)}
                >
                    <option value="default">Default</option>
                    <option value="high">Rating: High → Low</option>
                    <option value="low">Rating: Low → High</option>
                </select>
            </div>
        </div>
    );
}

export default GenreFilter;
