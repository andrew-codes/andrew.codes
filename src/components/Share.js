import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'
import { StaticQuery } from 'gatsby'
import { SpacedGroup } from './SpacedGroup'

const siteMetadataQuery = graphql`
  query ShareQuery {
    site {
      siteMetadata {
        altTitle
        author
        description
        siteUrl
        title
      }
    }
  }
`

const Share = ({ direction, post }) => (
  <StaticQuery
    query={siteMetadataQuery}
    render={({ site }) => {
      const url = `${site.siteMetadata.siteUrl}/${post.slug}`
      const iconSize = 24
      return (
        <SpacedGroup direction={direction}>
          <TwitterShareButton via={url} title={post.title}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
          <LinkedinShareButton
            url={url}
            title={post.title}
            description={post.excerpt}
          >
            <LinkedinIcon round size={iconSize} />
          </LinkedinShareButton>
          <RedditShareButton url={url} title={post.title}>
            <RedditIcon round size={iconSize} />
          </RedditShareButton>
          <FacebookShareButton quote={post.title}>
            <FacebookIcon round size={iconSize} />
          </FacebookShareButton>
          <TelegramShareButton url={url}>
            <TelegramIcon round size={iconSize} />
          </TelegramShareButton>
        </SpacedGroup>
      )
    }}
  />
)
Share.defaultProps = {
  direction: 'vertical',
  post: {},
}

export default Share
