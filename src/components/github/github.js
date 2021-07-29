import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Repo from './repo'
import * as styles from './github.module.scss'
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
    console.log(repos);
    return (
        <div className={styles.container} >
            {repos.map((repo, index) => <Repo key={index} repo={repo.node} />)}
        </div>
    )
}

export default Repos;
