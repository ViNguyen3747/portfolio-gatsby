import React from 'react'
import * as styles from './404.module.scss'
import { Link } from "gatsby"

const ErrorPage = () => (
    <div className={styles.container}>
        <span className={styles.letter}>4</span>
        <span className={styles.letter}>0</span>
        <span className={styles.letter}>4</span>
        <div className={styles.subtitle}>PAGE NOT FOUND</div>
        <Link to='/' className={styles.subtitle}>Back to Home</Link>
    </div>
)
export default ErrorPage