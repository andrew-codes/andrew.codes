import React, { Fragment } from 'react'
import Link from './Link'
import { StyleProvider, createComponent, ThemeProvider } from './StyleProvider'
import Clamp from './Clamp'
import { SpacedGroup } from './SpacedGroup'

const Headings = createComponent(
  ({ level }) => ({
    fontFamily:
      'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif!important',
    fontSize: 14,
    paddingLeft: level * 16,
    width: 200,
  }),
  'div',
)

const Heading = ({ items, url, title, level, slug }) => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

const TableOfContents = ({ post: { tableOfContents, slug } }) => (
  <StyleProvider>
    <ThemeProvider
      theme={{
        Link: {
          current: {
            fontWeight: 600,
          },
          color: '#666',
          background: 'none',
        },
      }}
    >
      <nav>
        <SpacedGroup direction="vertical" xs={4}>
          <Heading
            level={-1}
            items={[
              {
                url: '/',
                title: 'Abstract',
              },
            ]
              .concat(tableOfContents.items || [])
              .concat([{ url: '#comments', title: 'Discussion' }])}
            slug={slug}
          />
        </SpacedGroup>
      </nav>
    </ThemeProvider>
  </StyleProvider>
)
TableOfContents.defaultProps = {
  post: {
    tableOfContents: { items: [] },
  },
}
export default TableOfContents
