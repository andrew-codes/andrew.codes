import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import nodeToPost from '../nodeToPost'

const Index = ({ data }) => (
  <Layout>
    <div>
      <PostList posts={data.allMdx.edges.map(nodeToPost)} />
    </div>
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
