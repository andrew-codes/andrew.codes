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
import { graphql, useStaticQuery } from 'gatsby'
import SpacedGroup from './SpacedGroup'

const siteMetadataQuery = graphql`
  query ShareQuery {
    site {
      siteMetadata {
        altTitle
        description
        siteUrl
        title
      }
    }
  }
`

const Share = ({ direction, post, ...rest }) => {
  const { site } = useStaticQuery(siteMetadataQuery)

  const url = `${site.siteMetadata.siteUrl}/${post.slug}`
  const iconSize = 24
  return (
    <aside {...rest}>
      <SpacedGroup spread direction={direction}>
        <TwitterShareButton url={url} via="andrew_codes" title={post.title}>
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
        <FacebookShareButton url={url} quote={post.title}>
          <FacebookIcon round size={iconSize} />
        </FacebookShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </SpacedGroup>
    </aside>
  )
}
Share.defaultProps = {
  direction: 'vertical',
  post: {},
}

export default Share
