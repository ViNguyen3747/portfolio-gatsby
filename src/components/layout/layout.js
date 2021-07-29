import React from 'react'
import * as styles from './layout.module.scss'
import Header from './header/header'
import Footer from './footer/footer'
import { useThemeContext } from '../context/ThemeContext'
import { scrollbar } from '../../styles/scrollbar.module.scss'
const Layout = ({ children }) => {
    const [theme] = useThemeContext();
    return (
        <body className={scrollbar}>
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
        </body>
    )
}

export default Layout