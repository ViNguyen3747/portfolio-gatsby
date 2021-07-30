import React from 'react'
import { sunnyBox, gloomyBox, circle, row } from './github.module.scss'
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
        <div className={theme === 'sunny' ? sunnyBox : gloomyBox}>
            <Link name={repo.name} link={repo.url} theme={theme} />
            <div className={row}>
                {repo.languages.nodes.map((l, index) =>
                    <div>
                        <span className={circle} key={index} style={{ backgroundColor: l.color }} />
                        {l.name}
                    </div>)}
            </div>
        </div>
    )
}

export default Repo