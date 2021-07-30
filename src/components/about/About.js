import React from "react"
import Img from "gatsby-image"
import * as styles from "./about.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import { useThemeContext } from '../context/ThemeContext'
import { tagSunny, tagGloomy } from '../../styles/tag.module.scss'
const Detail = ({ info, theme }) => {
  const detail = info[0].node
  return (
    <div className={styles.container}>
      <div className={styles.title}>{detail.frontmatter.title}
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: detail.html }} />
        <div>
          {detail.frontmatter.tags.map((tag, index) =>
            <div key={index} className={theme === 'sunny' ? tagSunny : tagGloomy}>{tag}</div>)}
        </div>
      </div>
      <Img className={styles.img} fluid={detail.frontmatter.image.childImageSharp.fluid} alt="user photo" />
    </div>
  )
}
const About = () => {
  const [theme] = useThemeContext()

  const data = useStaticQuery(graphql`
{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(portfolio)/"}}) {
    edges {
      node {
        html
        frontmatter {
          title
          category
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
        }
      }
    }
  }
}
`
  )

  const info = data.allMarkdownRemark.edges

  return (
    <>
      <Detail info={info.filter(e => e.node.frontmatter.category === theme)} theme={theme} />
    </>



  )
}


export default About