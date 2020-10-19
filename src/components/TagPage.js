import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import nodeToPost from '../nodeToPost'
import Seo from '../components/Seo'
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
    <Seo
      description={`Articles tagged with ${pageContext.tag}`}
      slug={`/tag/${pageContext.tag}`}
      title={`${pageContext.tag} Articles`}
    />
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
