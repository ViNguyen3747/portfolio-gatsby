import React, { useMemo } from 'react'
import { Link } from 'gatsby'
import * as styles from './header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloud } from '@fortawesome/free-solid-svg-icons'
import { useThemeContext } from '../../context/ThemeContext'

const HeaderLink = (props) => (
    <Link className={props.theme === 'gloomy' ? styles.gloomyLink : styles.sunnyLink}
        activeClassName={props.theme === 'gloomy' ? styles.activeGloomy : styles.activeSunny} to={props.to} ><span> {props.text} </span> </Link>
)

const Header = () => {
    const [theme, { lighten, darken }] = useThemeContext()
    return useMemo(
        () => (
            <header className={styles.container}>
                <div className={styles.row} >
                    <span className={styles.theme}><FontAwesomeIcon onClick={lighten} icon={faSun} size="3x" className={theme === 'sunny' ? styles.sunny : styles.deactive} /></span>
                    <span className={styles.theme}><FontAwesomeIcon onClick={darken} icon={faCloud} size="3x" className={theme === 'gloomy' ? styles.gloomy : styles.deactive} /></span>
                </div>
                <div className={styles.row}>
                    <HeaderLink to='/' text='ABOUT ME' theme={theme} />
                    <HeaderLink to='/github' text='GITHUB' theme={theme} />
                    <HeaderLink to='/works' text='PROJECTS' theme={theme} />
                </div>
            </header >
        )
        ,
        [theme]
    )
}






export default Header