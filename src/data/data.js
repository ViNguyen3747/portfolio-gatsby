module.exports = {
    githubApiQuery: `query{
        viewer {
          avatarUrl
          repositories(first: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
            edges {
              node {
                createdAt
                homepageUrl
                name
                url
                languages(first: 10) {
                  nodes {
                    name
                    color
                  }
                }
                updatedAt
              }
            }
          }
        }
      }
      `
}