import classNames from 'classnames';
import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import Link from './Link';
import toSlug from "../toSlug";

const formatToDate = value => {
  const date = new Date(value);
  return `${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear()}`
};

const styles = () => ({
  postDate: {
    flex: 1,
  },
  postHeader: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    order: 1,
  },
  postMeta: {
    display: 'flex',
    flexDirection: 'row',
    order: -1,
  },
  tag: {
    display: 'inline-block',
    paddingRight: '0.25rem',
  },
  tagsContainer: {
    flex: 1,
  },
  tagList: {
    display: 'inline',
    margin: 0,
    padding: 0,
  },
  readTime: {
    fontStyle: 'italic',
  },
  readMoreButton: {
    flex: 1,
  },
});
const PostHeading = ({
                       classes,
                       className,
                       date,
                       tags,
                       timeToRead,
                       title,
                       url,

                     }) => (
  <header className={classNames(classes.postHeader, className)}>
    <Typography type="headline">
      {!url && title}
      {url && (
        <Link to={url}>
          {title}
        </Link>
      )}
    </Typography>
    <div className={classes.postMeta}>
      <time
        className={classes.postDate}
        dateTime={new Date(date).toISOString()}
      >
        {formatToDate(date)}
      </time>
      <time
        className={classes.readTime}
      >
        {timeToRead} {timeToRead > 1 ? 'mins' : 'min'}
      </time>
    </div>
    <div className={classes.tagsContainer}>
      <span>- </span>
      <ul className={classes.tagList}>
        {tags.map((tag, tagIndex) => (
          <li className={classes.tag} key={tag}>
            <Typography component="span" type="body1">
              <Link
                to={`/tags/${toSlug(tag)}`}
              >
                {tag}
              </Link>{tagIndex !== tags.length - 1 && (
              <span>,</span>)}
            </Typography>
          </li>
        ))}
      </ul>
      <span> -</span>
    </div>
  </header>
);

PostHeading.defaultProps = {
  tags: [],
};

export default withStyles(styles)(PostHeading);
