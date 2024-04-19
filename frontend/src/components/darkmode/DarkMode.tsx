import '../../styles/components/darkmode.sass'
import useDarkMode from '../../services/useDarkMode';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="dark-mode-toggle">
            <button onClick={toggleTheme}>
                {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    );
};

export default DarkMode;
