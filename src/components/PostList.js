import React from 'react'
import PostSummary from './PostSummary'

const PostList = ({ posts }) => (
  <ol>
    {posts.map(post => (
      <li>
        <PostSummary key={post.slug} {...post} />
      </li>
    ))}
  </ol>
)

export default PostList
