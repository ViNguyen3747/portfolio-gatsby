import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './src/styles/scrollbar.scss'
import ThemeProvider from './src/components/context/ThemeContext'


export function wrapRootElement({ element }) {
    return <ThemeProvider>{element}</ThemeProvider>
}