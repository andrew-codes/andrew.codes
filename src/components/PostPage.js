import React from 'react'
import { graphql } from 'gatsby'
import Layout from './Layout'
import nodeToPost from '../nodeToPost'
import Post from './Post'

const PostLayout = ({ data: { mdx } }) => {
  return (
    <Layout>
      <Post {...nodeToPost({ node: mdx })} />
    </Layout>
  )
}

export default PostLayout

export const pageQuery = graphql`
  query PostById($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        cover
        date
        tags
      }
      fields {
        slug
        tagSlugs
        readingTime {
          text
        }
      }
      code {
        body
      }
    }
  }
`
