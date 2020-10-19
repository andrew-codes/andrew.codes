import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Seo from '../components/Seo'
import nodeToPost from '../nodeToPost'

const Index = ({ data }) => (
  <Layout>
    <Seo
      description="Articles written by Andrew Smith"
      slug="/"
      title="Articles"
    />
    <PostList posts={data.allMdx.edges.map(nodeToPost)} />
  </Layout>
)

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            color
            categorySlug
            readingTime {
              text
            }
            slug
            tagSlugs
          }
          frontmatter {
            featuredImage {
              publicURL
            }
            date
            tags
            title
          }
        }
      }
    }
  }
`
