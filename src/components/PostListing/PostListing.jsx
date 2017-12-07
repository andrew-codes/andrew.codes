import classNames from 'classnames';
import Link from "gatsby-link";
import React from "react";
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  oddPosts: {
    backgroundColor: '#f7f7f7',
  },
  post: {
    display: 'flex',
    flexFlow: 'row wrap',
    minHeight: '250px',
  },
  postArticle: {
    padding: `${theme.spacing.unit * 2}px`,
  },
  postDate: {
    flex: 1,
  },
  postFooter: {
    flex: 1,
    order: 2,
    [theme.breakpoints.down('md')]: {
      flex: 0,
    }
  },
  postHeader: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    order: 1,
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 2}px`,
  },
  postHeaderAndArticleContainer: {
    flex: 3,
  },
  postMeta: {
    display: 'flex',
    flexDirection: 'row',
    order: -1,
  },
  root: {
    margin: '-1rem',
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
  readTime: {},
});

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const {
      classes,
    } = this.props;
    const postList = this.getPostList();
    return (
      <div className={classes.root}>
        {postList.map((post, postIndex) => (
          <div className={classNames(classes.post, postIndex % 2 === 1 && classes.oddPosts)}>
            <div className={classes.postHeaderAndArticleContainer}>
              <header className={classes.postHeader}>
                <Typography type="headline">
                  <Link to={post.path} key={post.title}>{post.title}
                  </Link></Typography>
                <div className={classes.postMeta}>
                  <time
                    className={classes.postDate}
                    dateTime={new Date(post.date).toISOString()}
                  >
                    {post.date}
                  </time>
                  <time className={classes.readTime}>{post.timeToRead}{post.timeToRead > 1 ? 'mins' : 'min'}</time>
                </div>
                <div className={classes.tagsContainer}>
                  <span>- </span>
                  <ul className={classes.tagList}>
                    {post.tags.map((tag, tagIndex) => (
                      <li className={classes.tag} key={tag}>
                        <Typography component="span" type="body1"><Link
                          to={`/tags/${tag.replace(' ', '-')}`}
                        >
                          {tag}
                        </Link>{tagIndex !== post.tags.length - 1 && (
                          <span>,</span>)}</Typography>
                      </li>
                    ))}
                  </ul>
                  <span> -</span>
                </div>
              </header>
              <article className={classes.postArticle}>
                <Typography paragraph type="body1">
                  {post.excerpt}
                </Typography>
              </article>
            </div>
            <footer
              className={classes.postFooter}
              style={{
                backgroundColor: 'none',
                backgroundImage: `url(${post.cover})`,
              }}
            />

          </div>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(PostListing);
