import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import nodeToPost from '../nodeToPost'
import SpacedGroup from './SpacedGroup'

const Header = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: center;
  font-size: 18px;
`

const TagName = styled.span`
  background: rgb(61, 62, 67);
  margin-left: 8px;
  padding: 3px 8px;
  border-bottom: 2px solid rgb(168, 169, 176);
`

const TagPage = ({ data, pageContext }) => (
  <Layout>
    <SpacedGroup direction="vertical" spacing={32}>
      <Header>
        articles about <TagName>{pageContext.tag}</TagName>
      </Header>
      <div>
        <PostList posts={data.allMdx.edges.map(nodeToPost)} />
      </div>
    </SpacedGroup>
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
            color
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
