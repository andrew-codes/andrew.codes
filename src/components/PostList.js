import styled from 'styled-components'
import PostSummary from './PostSummary'

const MasonLayout = ({ as, ...rest }) => {
  const Root = styled(as)`
    display: flex;
    flex-wrap: wrap;
    padding: 16px;
  `
  return <Root {...rest} />
}

const MasonTile = ({ as, ...rest }) => {
  const Root = styled(as)`
    display: flex;
    flex-wrap: wrap;
    padding: 16px;
  `
  return <Root {...rest} />
}

const OrderedList = styled.ol`
  list-style: none;
`
const ListItem = styled.li`
  list-style: none;
`
const PostList = ({ posts }) => (
  <MasonLayout as={OrderedList}>
    {posts.map((post, index) => (
      <MasonTile as={ListItem} key={post.slug}>
        <PostSummary key={post.slug} {...post} index={index} />
      </MasonTile>
    ))}
  </MasonLayout>
)

export default PostList
