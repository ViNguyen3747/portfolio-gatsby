import React from "react"
import { useThemeContext } from '../../context/ThemeContext'
import { gloomyLink, sunnyLink } from '../../../styles/link.module.scss'
import { container } from "./footer.module.scss"

const Link = ({ platform, link, theme }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={theme === 'sunny' ? sunnyLink : gloomyLink}>{platform}</div>
    </a>
)
const Footer = () => {
    const [theme] = useThemeContext()

    return (
        <footer className={container}>
            <Link platform="linkedin" link="https://www.linkedin.com/in/thi-kieu-vi-nguyen-0894a919a/" theme={theme} />
            <Link platform="github" link="https://github.com/ViNguyen3747" theme={theme} />
            <a href="/Vi_Resume.pdf" target="_blank" className={theme === 'sunny' ? sunnyLink : gloomyLink}>RESUME</a>
        </footer>
    )
}

export default Footer