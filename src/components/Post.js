import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import React from 'react'
import Seo from './Seo'
import { Paper } from './Paper'
import { SpacedGroup } from './SpacedGroup/index'

const Post = ({ title, body }) => (
  <article>
    <Seo title={title} />
    <Paper>
      <SpacedGroup>
        <header>
          <h1>{title}</h1>
        </header>
        <MDXRenderer>{body}</MDXRenderer>
        <footer />
      </SpacedGroup>
    </Paper>
  </article>
)
export default Post
