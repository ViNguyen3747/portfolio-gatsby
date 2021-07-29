import React from 'react'
import * as styles from './github.module.scss'
import { gloomyLink, sunnyLink } from '../../styles/link.module.scss'
import { useThemeContext } from '../context/ThemeContext'

const Link = ({ name, link, theme }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={theme === 'sunny' ? sunnyLink : gloomyLink}>{name}</div>
    </a>
)

const Repo = ({ repo }) => {
    const [theme] = useThemeContext()
    return (
        <div className={styles.content}>
            <Link name={repo.name} link={repo.url} theme={theme} />
            <div className={styles.row}>
                {repo.languages.nodes.map(l =>
                    <div>
                        <span className={styles.circle} style={{ backgroundColor: l.color }} />
                        {l.name}
                    </div>)}
            </div>
            <div className={styles.date}>
                <div>Created:{repo.createdAt}</div>
                <div>Updated:{repo.updatedAt}</div>
            </div>

        </div>
    )
}

export default Repo