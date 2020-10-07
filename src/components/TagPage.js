import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const TagPage = ({ data }) => (
  <Layout>
    <div>
      <PostList
        posts={data.allMdx.edges.map(({ node }) => ({
          ...node.frontmatter,
          readingTime: node.fields.readingTime.text,
          slug: node.fields.slug,
          tags: node.frontmatter.tags.map((tag, index) => ({
            name: tag,
            slug: node.fields.tagSlugs[index],
          })),
        }))}
      />
    </div>
  </Layout>
)

export default TagPage

export const pageQuery = graphql`
  query TagPageQuery($tag: [String]) {
    allMdx(filter: { frontmatter: { tags: { in: $tag } } }) {
      edges {
        node {
          frontmatter {
            title
            cover
            date
            category
            tags
          }
          fields {
            slug
            tagSlugs
            categorySlug
            readingTime {
              text
            }
          }
          body
        }
      }
    }
  }
`
