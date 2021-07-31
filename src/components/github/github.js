import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { container } from './github.module.scss'
import Repo from './repo'
const Repos = () => {
  const data = useStaticQuery(graphql`
    {
      allGithubData {
        edges {
          node {
            data {
              viewer {
                repositories {
                  edges {
                    node {
                      createdAt(formatString: "MMMM DD YYYY")
                      homepageUrl
                      name
                      url
                      languages {
                        nodes {
                          name
                          color
                        }
                      }
                      updatedAt(formatString: "MMMM DD YYYY")
                    }
                  }
                }
                avatarUrl
              }
            }
          }
        }
      }
    }
  `)

  const repos = data.allGithubData.edges[0].node.data.viewer.repositories.edges;
  return (
    <div className={container} >
      {repos.map((repo, index) => <Repo key={index} repo={repo.node} />)}
    </div>
  )
}

export default Repos;
