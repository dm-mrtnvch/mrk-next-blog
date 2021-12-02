import {useState} from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
    if (typeof localStorage === "undefined") {
        return false
    }
    const value = localStorage.getItem("darkMode")
    return value === null ? "false" : JSON.stringify(value)
}

function ThemeSwitch() {
    const [darkMode, setDarkMode] = useState(loadDarkMode)

    const handleClick = () => {
        localStorage.setItem("darkMode", JSON.stringify(!darkMode))
        setDarkMode(!darkMode)
    }

    console.log("[ThemeSwitch]: darkMode", darkMode)
    let text = darkMode ? "light theme" : "dark theme"
    return (
        <>
            <button
                onClick={handleClick}
                suppressHydrationWarning
            >
                {text}
            </button>
            <style jsx>{`
              button {
                background: none;
                border: none;
                color: inherit;
                cursor: pointer;
              }
            `}</style>
            {darkMode && <DarkTheme/>}

        </>
    )
}

export default ThemeSwitch