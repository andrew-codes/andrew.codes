import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Seo from './Seo'
import { Paper } from './Paper'
import { kebabCase } from '../../node_modules/change-case/change-case'
import Code from './Code'
import Typography from './Typography'

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
              <Typography as="h1" id={kebabCase(children)}>
                <a name={kebabCase(children.replace(/['"]/g, ''))}>
                  {children}
                </a>
              </Typography>
            )
          },
          h2: ({ children }) => {
            return (
              <Typography as="h2" id={kebabCase(children)}>
                <a name={kebabCase(children.replace(/['"]/g, ''))}>
                  {children}
                </a>
              </Typography>
            )
          },
          h3: ({ children }) => {
            return (
              <Typography as="h3" id={kebabCase(children)}>
                <a name={kebabCase(children.replace(/['"]/g, ''))}>
                  {children}
                </a>
              </Typography>
            )
          },
          h4: ({ children }) => {
            return (
              <Typography as="h4" id={kebabCase(children)}>
                <a name={kebabCase(children.replace(/['"]/g, ''))}>
                  {children}
                </a>
              </Typography>
            )
          },
          h5: ({ children }) => {
            return (
              <Typography as="h5" id={kebabCase(children)}>
                <a name={kebabCase(children.replace(/['"]/g, ''))}>
                  {children}
                </a>
              </Typography>
            )
          },
          h6: ({ children }) => {
            return (
              <Typography as="h6" id={kebabCase(children)}>
                <a name={kebabCase(children.replace(/['"]/g, ''))}>
                  {children}
                </a>
              </Typography>
            )
          },
          blockquote: ({ children }) => (
            <Typography as="blockquote">{children}</Typography>
          ),
        }}
      >
        {body}
      </MDXRenderer>
    </Paper>
  </article>
)
export default Post
