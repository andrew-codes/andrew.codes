import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import { graphql, StaticQuery } from 'gatsby'

const siteMetadataQuery = graphql`
  query CommentsQuery {
    site {
      siteMetadata {
        altTitle
        description
        disqus {
          shortName
        }
        siteUrl
        title
      }
    }
  }
`

const Comments = ({ post }) => (
  <StaticQuery
    query={siteMetadataQuery}
    render={({ site }) => (
      <DiscussionEmbed
        shortname={site.siteMetadata.disqus.shortName}
        config={{
          identifier: post.slug,
          title: post.title,
          url: `${
            process.env.NODE_ENV === 'development'
              ? `http://${site.siteMetadata.disqus.shortName}`
              : site.siteMetadata.siteUrl
          }/${post.slug}`,
        }}
      />
    )}
  />
)

export default Comments
