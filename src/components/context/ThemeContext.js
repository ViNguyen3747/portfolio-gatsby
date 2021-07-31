import React, { createContext, useContext, useMemo, useState } from 'react'
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('sunny')

    const handler = useMemo(
        () => ({
            lighten: () => {
                setTheme('sunny')
            },
            darken: () => {
                setTheme('gloomy')
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