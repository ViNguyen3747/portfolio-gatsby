import React, { useState, createContext, useContext, useMemo } from 'react'



const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const defaultThemeState = (typeof window !== 'undefined' && window.localStorage.getItem('theme')) || null

    const [theme, setTheme] = useState(defaultThemeState)

    const handler = useMemo(
        () => ({
            lighten: () => {
                setTheme('sunny')
                typeof window !== 'undefined' && window.localStorage.setItem('theme', 'sunny')
            },
            darken: () => {
                setTheme('gloomy')
                typeof window !== 'undefined' && window.localStorage.setItem('theme', 'gloomy')

            }
        }),
        []
    )

    return (
        <ThemeContext.Provider
            value={[theme, handler]}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

export const useThemeContext = () => useContext(ThemeContext)