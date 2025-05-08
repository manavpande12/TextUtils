import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useAlert } from "./AlertContext";

const ThemeContext = createContext("light");

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === 'dark'
    );

    const { showAlert } = useAlert();
    const titleIntervalRef = useRef(null);

    useEffect(() => {
        // Clear previous interval
        if (titleIntervalRef.current) {
            clearInterval(titleIntervalRef.current);
        }

        let titles;
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            showAlert("🌙 Dark Mode is enabled successfully!");

            titles = [
                "🌑 TextUtils - Dark Mode Activated",
                "✨ TextUtils is Amazing!",
                "🚀 Power Up Your Text!",
                "🖤 Embrace the Darkness",
                "🌌 Welcome to the Dark Side"
            ];
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            showAlert("☀️ Light Mode is enabled successfully!");

            titles = [
                "🌞 TextUtils - Light Mode Activated",
                "✨ Shine Bright with TextUtils!",
                "📄 Clear & Clean Editing",
                "🌟 Light Up Your Text!",
                "🕊️ Breathe Easy in Light Mode"
            ];
        }

        let i = 0;
        titleIntervalRef.current = setInterval(() => {
            document.title = titles[i % titles.length];
            i++;
        }, 2000);

        // Cleanup interval
        return () => clearInterval(titleIntervalRef.current);

    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useDarkMode = () => useContext(ThemeContext);