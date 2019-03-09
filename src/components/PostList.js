import React from 'react'
import PostSummary from './PostSummary'
import { createComponent, StyleProvider } from './StyleProvider'

const OrderedList = createComponent(
  () => ({
    listStyle: 'none',
    margin: 0,
    padding: 0,
  }),
  'ol',
)
const ListItem = createComponent(
  () => ({
    listStyle: 'none',
    margin: 0,
    padding: 0,
  }),
  'li',
)

const PostList = ({ posts }) => (
  <StyleProvider>
    <OrderedList>
      {posts.map(post => (
        <ListItem key={post.slug}>
          <PostSummary key={post.slug} {...post} />
        </ListItem>
      ))}
    </OrderedList>
  </StyleProvider>
)

export default PostList
