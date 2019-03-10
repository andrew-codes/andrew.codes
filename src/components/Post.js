import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import React from 'react'
import Seo from './Seo'
import { Paper } from './Paper'
import { SpacedGroup } from './SpacedGroup/index'
import { kebabCase } from '../../node_modules/change-case/change-case'

const Post = ({ title, body, tableOfContents }) => (
  <article>
    <Seo title={title} />
    <Paper>
      <SpacedGroup>
        <header>
          <h1>{title}</h1>
        </header>
        <MDXRenderer
          components={{
            h1: ({ children }) => {
              return (
                <h1 id={kebabCase(children)}>
                  <a name={kebabCase(children.replace(/['"]/g, ''))}>
                    {children}
                  </a>
                </h1>
              )
            },
            h2: ({ children }) => {
              return (
                <h2 id={kebabCase(children)}>
                  <a name={kebabCase(children.replace(/['"]/g, ''))}>
                    {children}
                  </a>
                </h2>
              )
            },
            h3: ({ children }) => {
              return (
                <h3 id={kebabCase(children)}>
                  <a name={kebabCase(children.replace(/['"]/g, ''))}>
                    {children}
                  </a>
                </h3>
              )
            },
            h4: ({ children }) => {
              return (
                <h4 id={kebabCase(children)}>
                  <a name={kebabCase(children.replace(/['"]/g, ''))}>
                    {children}
                  </a>
                </h4>
              )
            },
            h5: ({ children }) => {
              return (
                <h5 id={kebabCase(children)}>
                  <a name={kebabCase(children.replace(/['"]/g, ''))}>
                    {children}
                  </a>
                </h5>
              )
            },
            h6: ({ children }) => {
              return (
                <h6 id={kebabCase(children)}>
                  <a name={kebabCase(children.replace(/['"]/g, ''))}>
                    {children}
                  </a>
                </h6>
              )
            },
          }}
        >
          {body}
        </MDXRenderer>
        <footer />
      </SpacedGroup>
    </Paper>
  </article>
)
export default Post
