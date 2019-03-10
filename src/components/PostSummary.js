import React from 'react'
import { Link } from 'gatsby'
import { SpacedGroup } from './SpacedGroup'

const PostSummary = ({
  cover,
  date,
  excerpt,
  readingTime,
  slug,
  tags,
  title,
}) => (
  <article>
    <SpacedGroup direction="vertical">
      <h2>
        <Link to={slug}>{title}</Link>
      </h2>
      <span>{readingTime}</span>
      <ul>
        {tags.map(tag => (
          <li key={tag.slug}>
            <Link to={tag.slug}>{tag.name}</Link>
          </li>
        ))}
      </ul>
      <p>{excerpt}</p>
    </SpacedGroup>
  </article>
)
export default PostSummary
