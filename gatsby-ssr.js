import React from 'react'
import ThemeProvider from './src/components/context/ThemeContext'


export function wrapRootElement({ element }) {
    return <ThemeProvider>{element}</ThemeProvider>
}