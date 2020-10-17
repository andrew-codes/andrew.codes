import approximateTime from 'approximate-time'
import styled from 'styled-components'
import { get } from 'lodash/fp'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import AuthorName from './AuthorName'
import Link from './Link'
import Seo from './Seo'
import Share from './Share'
import SpacedGroup from './SpacedGroup'
import Typography, { BodyCopy } from './Typography'
import WithBreakpoint from './WithBreakpoint'
import { kebabCase } from 'change-case'

const HeaderLayout = styled.div`
  background: ${({ background }) => background};
  border-radius: 8px;
  display: flex;
  width: ${({ breakpoint }) =>
    WithBreakpoint.isBreakpointUp('md', breakpoint)
      ? 'calc(100% - 96px)'
      : 'calc(100% - 32px)'};
  min-height: ${({ breakpoint }) =>
    WithBreakpoint.isBreakpointUp('md', breakpoint) ? '600px' : '200px'};
  margin: ${({ breakpoint }) =>
    WithBreakpoint.isBreakpointUp('md', breakpoint) ? '0 48px' : '16px'};
  align-items: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 48px;
    top: 0;
    width: calc(100% - 96px);
    background: darkgray;
    opacity: 0.35;
    border-radius: 8px;
  }

  > * {
    position: relative;
    padding: 24px;
  }
`

const Header = styled.header`
  display: flex;
  width: 500px;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: ${({ breakpoint }) =>
    WithBreakpoint.isBreakpointUp('md', breakpoint) ? '96px' : '0'};
`

const ArticleTitle = styled.h1`
  font-size: ${({ breakpoint }) =>
    WithBreakpoint.isBreakpointUp('md', breakpoint) ? '54px' : '24px'};
`

const ReadTime = styled.span`
  display: inline-block;
  margin-left: 24px;
`

const Article = styled.article`
  position: relative;
  margin-bottom: ${({ breakpoint }) =>
    WithBreakpoint.isBreakpointUp('md', breakpoint) ? '0' : '32px'};
`

const ArticleBody = styled.div`
  background-color: rgb(34, 35, 39);
  border-radius: 28px;
  padding: ${({ breakpoint }) =>
    WithBreakpoint.isBreakpointUp('md', breakpoint)
      ? '32px 85px 120px'
      : '0 32px'};
  margin: ${({ breakpoint }) =>
    WithBreakpoint.isBreakpointUp('md', breakpoint)
      ? '-96px auto 0 auto'
      : '0 auto'};
  max-width: 1000px;
  position: relative;
`

const Footer = styled.footer`
  position: absolute;
  bottom: -28px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  margin: ${({ breakpoint }) =>
    WithBreakpoint.isBreakpointUp('md', breakpoint)
      ? '0 auto'
      : '0 auto -32px'};
  > * {
    z-index: 2;
  }
`
const SocialSharing = styled(Share)`
  min-width: 264px;
  display: flex;
  justify-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 28px;
  background-color: rgb(34, 35, 39);
  padding: 16px;
`

const Blockquote = styled.blockquote`
  border-left: 5px solid #414242;
  margin: 0 0 48px -55px;
  padding: 20px 50px;

  > p {
    margin: 0;
    padding: 0;
    font-size: 24px;
    line-height: 1.65;
    font-weight: 200;
  }
`

const Post = ({
  body,
  color,
  date,
  excerpt,
  readingTime,
  slug,
  tags,
  title,
}) => {
  const data = useStaticQuery(graphql`
    query PostAuthorQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)

  return (
    <WithBreakpoint>
      {(breakpoint) => (
        <Article breakpoint={breakpoint}>
          <Seo
            title={title}
            description={excerpt}
            keywords={tags.map(get('name'))}
          />

          <HeaderLayout background={color} breakpoint={breakpoint}>
            <Header breakpoint={breakpoint}>
              <ArticleTitle breakpoint={breakpoint}>{title}</ArticleTitle>
              <div>
                <Typography variant="small">by </Typography>
                <AuthorName>{data.site.siteMetadata.author.name}</AuthorName>
                <Typography
                  as="time"
                  variant="small"
                  dateTime={date.toString()}
                >
                  {' '}
                  {approximateTime(new Date(date))} ago
                </Typography>
                <Typography as={ReadTime} variant="small">
                  {' '}
                  {readingTime}
                </Typography>
                <SpacedGroup noGutters spacing={4}>
                  {tags.map(({ name, slug }) => (
                    <Link to={slug}>
                      <Typography variant="small">{name}</Typography>
                    </Link>
                  ))}
                </SpacedGroup>
              </div>
            </Header>
          </HeaderLayout>
          <ArticleBody breakpoint={breakpoint}>
            <MDXProvider
              components={{
                a: ({ ...rest }) => <Link {...rest} />,
                p: ({ ...rest }) => <BodyCopy {...rest} />,
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
                  <Typography as={Blockquote}>{children}</Typography>
                ),
              }}
            >
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </ArticleBody>
          <Footer breakpoint={breakpoint}>
            <SocialSharing direction="horizontal" post={{ slug }}>
              Twitter
            </SocialSharing>
          </Footer>
        </Article>
      )}
    </WithBreakpoint>
  )
}
export default Post
