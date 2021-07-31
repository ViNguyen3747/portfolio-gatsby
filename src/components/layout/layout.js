import React from 'react'
import { useThemeContext } from '../context/ThemeContext'
import Header from './header/header'
import Footer from './Footer/footer'
import * as styles from './layout.module.scss'

const Layout = ({ children }) => {
    const [theme] = useThemeContext();

    return (
        <div className={styles.container}>
            <div className={theme === 'gloomy'
                ? styles.gloomy : null}>
                <div>
                    <Header />
                    <div className={styles.content}>
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout