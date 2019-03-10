import React from 'react'
import { graphql } from 'gatsby'
import { Manager, Reference, Popper } from 'react-popper'
import Layout from './Layout'
import nodeToPost from '../nodeToPost'
import Post from './Post'
import Share from './Share'
import { PortalContainer } from './PortalContainer'
import { Box, FixedBox } from './Box'
import Comments from './Comments'
import TableOfContents from './TableOfContents'
import WindowResizeListener from './WindowResizeListener'

const PostPage = ({ data: { mdx } }) => {
  const post = nodeToPost({ node: mdx })

  return (
    <Layout>
      <Manager>
        <Reference>
          {({ ref }) => (
            <div ref={ref}>
              <Box padding="64px 16px">
                <Post default {...post} />
                <Box>
                  <h2 id="comments">Discussion</h2>
                  <Comments post={post} />
                </Box>
              </Box>
            </div>
          )}
        </Reference>
        <Popper placement="right-start">
          {({ ref, style, placement }) => (
            <WindowResizeListener>
              {({ width }) => (
                <PortalContainer mounted={width >= 1100}>
                  <FixedBox>
                    <div ref={ref} style={style} data-placement={placement}>
                      <Box right={-72} position="absolute" top={48}>
                        <Share post={post} />
                      </Box>
                    </div>
                  </FixedBox>
                </PortalContainer>
              )}
            </WindowResizeListener>
          )}
        </Popper>
      </Manager>
      <WindowResizeListener>
        {({ width }) => (
          <PortalContainer mounted={width >= 1420}>
            <FixedBox top={0} bottom={0}>
              <Box left={8} position="absolute" top={'16%'} bottom={0}>
                <TableOfContents post={post} />
              </Box>
            </FixedBox>
          </PortalContainer>
        )}
      </WindowResizeListener>
    </Layout>
  )
}

export default PostPage

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
      tableOfContents
    }
  }
`
