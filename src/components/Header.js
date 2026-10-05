import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";

function Header({ darkMode, toggleTheme }) {
    return (
        <header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 40px',
                borderBottom: darkMode ? '1px solid #333' : '1px solid #ddd',
                backgroundColor: darkMode ? '#16213e' : '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                position: 'sticky',
                top: 0,
                zIndex: 100,
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MdLocalMovies size={32} color={darkMode ? '#e94560' : '#e94560'} />
                <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 700, color: darkMode ? '#e0e0e0' : '#1a1a2e' }}>
                    Mini Movie Manager
                </h1>
            </div>

            <button
                onClick={toggleTheme}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 18px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: 'none',
                    borderRadius: '20px',
                    backgroundColor: darkMode ? '#e94560' : '#1a1a2e',
                    color: '#fff',
                    transition: 'all 0.3s',
                }}
            >
                {darkMode ? <><CiLight size={18} /> Light Mode</> : <><MdDarkMode size={18} /> Dark Mode</>}
            </button>
        </header>
    );
}

export default Header;