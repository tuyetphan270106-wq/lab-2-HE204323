import React, { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchBar({ search, setSearch }) {
    const inputRef = useRef();

    const handleClear = () => {
        setSearch('');
        inputRef.current.focus();
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '20px 0',
            }}
        >
            <label style={{ fontWeight: 600, whiteSpace: 'nowrap', fontSize: '15px' }}>
                🔍 Search:
            </label>
            <div style={{ position: 'relative', flex: 1 }}>
                <FiSearch
                    size={18}
                    style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#999',
                    }}
                />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Nhập tên phim..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px 40px 10px 38px',
                        fontSize: '15px',
                        border: '1.5px solid #ccc',
                        borderRadius: '8px',
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = '#e94560'}
                    onBlur={e => e.target.style.borderColor = '#ccc'}
                />
                {search && (
                    <button
                        onClick={handleClear}
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '18px',
                            color: '#999',
                        }}
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
}

export default SearchBar;
