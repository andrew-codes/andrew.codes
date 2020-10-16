import approximateTime from 'approximate-time'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import AuthorName from './AuthorName'
import Link from './Link'
import Seo from './Seo'
import Typography from './Typography'
import { kebabCase } from '../../node_modules/change-case/change-case'

const HeaderLayout = styled.div`
  background: ${({ background }) => background};
  border-radius: 8px;
  display: flex;
  width: calc(100% - 96px);
  min-height: 600px;
  margin: 0 48px;
  align-items: center;
  postion: relative;

  &:before {
    content: '';
    position: absolute;
    left: 48px;
    top: 0;
    width: calc(100% - 96px);
    min-height: 600px;
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
  margin-bottom: 96px;
`

const ArticleTitle = styled.h1`
  font-size: 54px;
`

const ReadTime = styled.span`
  display: inline-block;
  margin-left: 24px;
`

const Article = styled.article`
  position: relative;
`

const ArticleBody = styled.div`
  background-color: rgb(34, 35, 39);
  border-radius: 28px;
  padding: 32px 85px 120px;
  margin: -96px auto 0 auto;
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
  margin: 0 auto;
  > * {
    z-index: 2;
  }
`
const Share = styled.div`
  min-width: 264px;
  display: flex;
  justify-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 28px;
  background-color: rgb(34, 35, 39);
  padding: 16px;
`

const Paragraph = styled.p`
  line-height: 32px;
  font-size: 18px;
  margin: 0 0 48px;
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

const Post = ({ color, date, body, readingTime, title }) => {
  return (
    <Article>
      <Seo title={title} />
      <HeaderLayout background={color}>
        <Header>
          <ArticleTitle>{title}</ArticleTitle>
          <div>
            <Typography as="span" variant="small">
              by
            </Typography>
            <AuthorName> Andrew Smith</AuthorName>
            <Typography as="time" variant="small" dateTime={date.toString()}>
              {' '}
              {approximateTime(new Date(date))} ago
            </Typography>
            <Typography as={ReadTime} variant="small">
              {' '}
              {readingTime}
            </Typography>
          </div>
        </Header>
      </HeaderLayout>
      <ArticleBody>
        <MDXProvider
          components={{
            a: ({ ...rest }) => <Link {...rest} />,
            p: ({ ...rest }) => <Typography as={Paragraph} {...rest} />,
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
      <Footer>
        <Share>Twitter</Share>
      </Footer>
    </Article>
  )
}
export default Post
