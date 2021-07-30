import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, meta, title }) => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
          description
          image
          url
          keywords         
        }
      }
    }
  `)

    const info = data.site.siteMetadata
    const metaDescription = description || info.description
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${info.title}`}
            meta={[
                {
                    name: `og:url`,
                    content: info.url
                },
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `keywords`,
                    content: info.keywords,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:image`,
                    content: info.image,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: info.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `twitter:image`,
                    content: info.image
                }
            ].concat(meta)}
        />
    )
}

Seo.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

Seo.propTypes = {
    lang: PropTypes.string,
    image: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}
export default Seo

