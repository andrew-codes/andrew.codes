import querystring from 'querystring'
import { useLocation } from '@reach/router'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import BackgroundColors from '../utilities/BackgroundColors'
import Comments from './Comments'
import Layout from './Layout'
import nodeToPost from '../nodeToPost'
import Post from './Post'
import Typography from './Typography'
import LinkOverlay from './LinkOverlay'

const Article = styled.article`
  padding: 32px;
  flex: 1;
  background: ${({ background }) => background};
`

const Aside = styled.aside`
  width: calc(100% - 85px - 85px);
  margin: 0 auto 96px;
  background: rgb(40, 41, 46);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

const Articles = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    position: relative;
  }
`

const NewerArticle = styled(Article)`
  border-radius: 8px 0 0;
`

const OlderArticle = styled(Article)`
  text-align: right;
  border-radius: 0 8px 0 0;
`

const ArticleTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 24px 0;
  position: relative;
  > a {
    text-decoration: none !important;
  }
`

const CommentsLayout = styled.div`
  padding: 32px;
`

const PostPage = ({ data: { allMdx }, pageContext: { id } }) => {
  const node = allMdx.edges.find((edge) => edge.node.id === id)
  const post = nodeToPost({ node: node.node })

  return (
    <Layout>
      <Post {...post} />
      <Aside>
        <Articles>
          {node.previous && (
            <NewerArticle background={node.previous.fields.color}>
              <LinkOverlay to={node.previous.fields.slug} />
              <Typography variant="small">Newer post</Typography>
              <ArticleTitle>{node.previous.frontmatter.title}</ArticleTitle>
            </NewerArticle>
          )}
          {node.next && (
            <OlderArticle background={node.next.fields.color}>
              <LinkOverlay to={node.next.fields.slug} />{' '}
              <Typography variant="small">Older post</Typography>
              <ArticleTitle>{node.next.frontmatter.title}</ArticleTitle>
            </OlderArticle>
          )}
        </Articles>
        <CommentsLayout>
          <Comments post={post} />
        </CommentsLayout>
      </Aside>
    </Layout>
  )
}

export default PostPage

export const pageQuery = graphql`
  query Posts {
    allMdx(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        next {
          fields {
            color
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            color
            slug
          }
          frontmatter {
            title
          }
        }
        node {
          id
          frontmatter {
            title
            date
            tags
          }
          fields {
            color
            slug
            tagSlugs
            readingTime {
              text
            }
          }
          body
          tableOfContents
        }
      }
    }
  }
`
