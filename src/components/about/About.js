import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useThemeContext } from '../context/ThemeContext'
import { tagSunny, tagGloomy } from '../../styles/tag.module.scss'
import { container, title, text, img, subtitle } from "./about.module.scss"

const Detail = ({ infoDetail, theme }) => {
  console.log(infoDetail)
  const detail = infoDetail.node
  console.log(info.node);
  return (
    <div className={container}>
      <div>
        <div className={title}>{detail.frontmatter.title}</div>
        <div className={text} dangerouslySetInnerHTML={{ __html: detail.html }} />
        <div>
          {detail.frontmatter.tags.map((tag, index) =>
            <div key={index} className={theme === 'sunny' ? tagSunny : tagGloomy}>{tag}</div>)}
        </div>
      </div>
      <div>
        <Img className={img} fluid={detail.frontmatter.image.childImageSharp.fluid} alt="user photo" />
        <div className={subtitle}>{detail.frontmatter.subtitle}</div>
      </div>

    </div>
  )
}
const About = () => {
  const [theme] = useThemeContext()

  const data = useStaticQuery(graphql`
{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(about)/"}}) {
    edges {
      node {
        html
        frontmatter {
          title          
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          category
          tags
          subtitle
        }
      }
    }
  }
}
`
  )

  const info = data.allMarkdownRemark.edges
  console.log(info)

  return (
    <>
      <Detail info={info.find(e => e.node.frontmatter.category === theme)} theme={theme} />
    </>
  )
}


export default About