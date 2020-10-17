import styled from 'styled-components'
import PostSummary from './PostSummary'
import WithBreakpoint from './WithBreakpoint'

const MasonLayout = ({ as, ...rest }) => {
  const Root = styled(as)`
    display: flex;
    flex-wrap: wrap;
  `
  return <Root {...rest} />
}

const MasonTile = ({ as, ...rest }) => {
  const Root = styled(as)`
    display: flex;
    flex-wrap: wrap;
    padding: ${({ breakpoint }) =>
      WithBreakpoint.isBreakpointUp('md', breakpoint) ? '16px' : '8px'};
  `
  return <Root {...rest} />
}

const OrderedList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0 !important;
`
const ListItem = styled.li`
  list-style: none;
`
const PostList = ({ posts }) => (
  <WithBreakpoint>
    {(breakpoint) => (
      <MasonLayout as={OrderedList}>
        {posts.map((post, index) => (
          <MasonTile as={ListItem} breakpoint={breakpoint} key={post.slug}>
            <PostSummary key={post.slug} {...post} index={index} />
          </MasonTile>
        ))}
      </MasonLayout>
    )}
  </WithBreakpoint>
)

export default PostList
