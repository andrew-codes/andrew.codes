import approximateTime from 'approximate-time'
import styled from 'styled-components'
import AuthorName from './AuthorName'
import BackgroundColors from '../utilities/BackgroundColors'
import Link from './Link'
import LinkOverlay from './LinkOverlay'
import Typography from './Typography'

const Article = styled.article`
  background: ${({ background }) => background};
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  min-height: 370px;
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
}) => (
  <Article background={color}>
    <LinkOverlay aria-label={title} to={slug} />
    <ArticleTitle>
      <Link to={slug}>{title}</Link>
    </ArticleTitle>
    <Author>
      <Typography as="span" variant="small">
        by{' '}
      </Typography>
      <AuthorName>Andrew Smith</AuthorName>
      <time dateTime={date.toString()}>
        <Typography as="span" variant="small">
          {' '}
          {approximateTime(new Date(date))} ago
        </Typography>
      </time>
    </Author>
    <ReadTime>{readingTime}</ReadTime>
  </Article>
)

export default PostSummary
