import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import React from 'react'
import Seo from './Seo'
import { Paper } from './Paper'
import { kebabCase } from '../../node_modules/change-case/change-case'
import Code from './Code'

const Post = ({ title, body }) => (
  <article>
    <Seo title={title} />
    <Paper>
      <header>
        <h1>{title}</h1>
      </header>
      <MDXRenderer
        components={{
          pre: ({ children }) => children,
          code: ({ children, className, metastring }) => {
            const language = className
              ? className.replace('language-', '')
              : null

            return (
              <Code language={language} highlightLines={metastring}>
                {children}
              </Code>
            )
          },
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
    </Paper>
  </article>
)
export default Post
