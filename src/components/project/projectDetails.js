import React from "react"
import Img from "gatsby-image"
import { useThemeContext } from '../context/ThemeContext'
import * as styles from './project.module.scss'
import { tagSunny, tagGloomy } from '../../styles/tag.module.scss'

const Detail = ({ project }) => {
    const tags = project.frontmatter.tags;
    const [theme] = useThemeContext()

    return (
        <div className={styles.container}>
            <a href={project.frontmatter.link} target="_blank" rel="noopener noreferrer">
                <Img className={styles.img} fluid={project.frontmatter.image.childImageSharp.fluid} alt="project photo" />
            </a>
            <h2 className={styles.title}>{project.frontmatter.title}</h2>
            <div>
                {tags.map((tag) => (
                    <span className={theme === 'sunny' ? tagSunny : tagGloomy}>{tag}</span>
                ))}
            </div>
        </div>
    )
}

export default Detail