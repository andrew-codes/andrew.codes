import React from 'react'
import { isEmpty } from 'lodash'
import Link from './Link'
import { StyleProvider, createComponent, ThemeProvider } from './StyleProvider'
import Clamp from './Clamp'
import { SpacedGroup } from './SpacedGroup'

const Headings = createComponent(
  ({ level }) => ({
    paddingLeft: level * 16,
    width: 200,
  }),
  'div',
)

const Heading = ({ items, url, title, level, slug }) => {
  return (
    <nav>
      {url && (
        <Headings level={level}>
          <Clamp>
            <Link to={`${slug}/${url}`}>{title}</Link>
          </Clamp>
        </Headings>
      )}
      {items &&
        items.map((item, index) => (
          <Heading key={index} {...item} level={level + 1} slug={slug} />
        ))}
    </nav>
  )
}

const TableOfContents = ({ post: { tableOfContents, slug } }) => (
  <StyleProvider>
    <ThemeProvider
      theme={{
        Link: {
          current: {
            color: 'darkgray',
            fontWeight: 600,
          },
          color: 'lightgray',
        },
      }}
    >
      <SpacedGroup direction="vertical" xs={4}>
        <Heading
          level={-1}
          items={(tableOfContents.items || []).concat([
            { url: '#comments', title: 'Discussion' },
          ])}
          slug={slug}
        />
      </SpacedGroup>
    </ThemeProvider>
  </StyleProvider>
)
TableOfContents.defaultProps = {
  post: {
    tableOfContents: { items: [] },
  },
}
export default TableOfContents
