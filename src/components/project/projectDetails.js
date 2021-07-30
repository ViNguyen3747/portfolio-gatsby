import React from "react"
import Img from "gatsby-image"
import { useThemeContext } from '../context/ThemeContext'
import { tagSunny, tagGloomy } from '../../styles/tag.module.scss'
import { container, img, title } from './project.module.scss'

const Detail = ({ project }) => {
    const tags = project.frontmatter.tags;
    const [theme] = useThemeContext()

    return (
        <div className={container}>
            <a href={project.frontmatter.link} target="_blank" rel="noopener noreferrer">
                <Img className={img} fluid={project.frontmatter.image.childImageSharp.fluid} alt="project photo" />
            </a>
            <div className={title}>{project.frontmatter.title}</div>
            <div>
                {tags.map((tag, index) => (
                    <span key={index} className={theme === 'sunny' ? tagSunny : tagGloomy}>{tag}</span>
                ))}
            </div>
        </div>
    )
}

export default Detail