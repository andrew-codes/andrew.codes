import approximateTime from 'approximate-time'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import AuthorName from './AuthorName'
import Link from './Link'
import LinkOverlay from './LinkOverlay'
import SpacedGroup from './SpacedGroup'
import Typography from './Typography'
import WithBreakpoint from './WithBreakpoint'

const Article = styled.article`
  background: ${({ background }) => background};
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  min-height: ${({ breakpoint }) =>
    WithBreakpoint.isBreakpointUp('md', breakpoint) ? '370px' : undefined};
  padding: 16px;
  position: relative;
  position: relative;
  width: 354.688px;

  &:before {
    background: ${({ coverUrl }) =>
      `no-repeat url('${coverUrl}') center/cover`};
    border-radius: 28px;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0.5;
    position: absolute;
    right: 0;
    top: 0;
  }
`

const ArticleTitle = styled.h2`
  font-size: 33px;
  font-weight: 700;
  margin: 0 0 24px 0;
  position: relative;
  > a {
    text-decoration: none !important;
  }
`

const Author = styled.div`
  position: relative;
`

const ReadTime = styled.span`
  display: flex;
  flex: 1;
  align-items: flex-end;
  position: relative;
`

const TagLink = styled(Link)`
  position: relative;
  z-index: 5;
`

const PostSummary = ({
  color,
  featuredImage,
  index,
  date,
  excerpt,
  readingTime,
  slug,
  tags,
  title,
}) => {
  const data = useStaticQuery(graphql`
    query PostSummaryAuthorQuery {
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
        <Article background={color} breakpoint={breakpoint}>
          <LinkOverlay aria-label={title} to={slug} />
          <ArticleTitle>
            <Link to={slug}>{title}</Link>
          </ArticleTitle>
          <Author>
            <Typography variant="small">by </Typography>
            <AuthorName>{data.site.siteMetadata.author.name}</AuthorName>
            <time dateTime={date.toString()}>
              <Typography variant="small">
                {' '}
                {approximateTime(new Date(date))} ago
              </Typography>
            </time>
          </Author>
          <SpacedGroup noGutters spacing={4}>
            {tags.map(({ name, slug }) => (
              <TagLink to={slug}>
                <Typography variant="small">{name}</Typography>
              </TagLink>
            ))}
          </SpacedGroup>
          <ReadTime>{readingTime}</ReadTime>
        </Article>
      )}
    </WithBreakpoint>
  )
}

export default PostSummary
