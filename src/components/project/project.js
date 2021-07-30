import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Detail from './projectDetails';
import { useStaticQuery, graphql } from "gatsby"

const Project = () => {
  const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(projects)/"}}) {
          edges {
            node {
              frontmatter {
                title
                tags
                image {
                  childImageSharp {
                    fluid (maxWidth: 550) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                link
              }
            }
          }
        }
      }
    `)
  const projects = data.allMarkdownRemark.edges
  console.log(projects)
  return (
    <Carousel variant="dark">
      {projects.map((p, index) => (
        <Carousel.Item key={index}>
          <Detail project={p.node} />
        </Carousel.Item>
      ))}


    </Carousel>
  )
}

export default Project