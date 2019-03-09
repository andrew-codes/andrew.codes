import React from 'react'
import { Link } from 'gatsby'

const PostSummary = ({ cover, date, readingTime, slug, tags, title }) => (
  <article>
    <h2>
      <Link to={slug}>{title}</Link>
    </h2>
    <span>{readingTime}</span>
    <ul>
      {tags.map(tag => (
        <li>
          <Link to={tag.slug}>{tag.name}</Link>
        </li>
      ))}
    </ul>
  </article>
)
export default PostSummary
