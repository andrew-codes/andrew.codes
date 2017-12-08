import classNames from 'classnames';
import ButtonBase from 'material-ui/ButtonBase';
import Link from 'gatsby-link';
import Paper from 'material-ui/Paper';
import React from "react";
import Typography from 'material-ui/Typography';
import {withRouter} from 'react-router';
import {withStyles} from 'material-ui/styles';
import toSlug from '../../toSlug';

const styles = theme => ({
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
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
    display: 'flex',
    flex: 1,
    order: 2,
    [theme.breakpoints.down('md')]: {
      display: 'none',
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
  readTime: {
    fontStyle: 'italic',
  },
  readMoreButton: {
    flex: 1,
  },
});

class PostListing extends React.Component {
  getPostList() {
    return this.props.postEdges
      .map(postEdge => {
        const pathParts = postEdge.node.fileAbsolutePath.split('/');
        return ({
          path: postEdge.node.fields.slug,
          tags: postEdge.node.frontmatter.tags,
          cover: postEdge.node.frontmatter.cover ? postEdge.node.frontmatter.cover : `/images/posts/${pathParts[pathParts.length - 2]}/cover.jpg`,
          title: postEdge.node.frontmatter.title,
          date: postEdge.node.frontmatter.date,
          excerpt: postEdge.node.excerpt,
          timeToRead: postEdge.node.timeToRead,
        });
      });
  }

  render() {
    const {
      classes,
      history,
    } = this.props;
    const postList = this.getPostList();
    return (
      <div className={classes.root}>
        {postList.map((post, postIndex) => (
          <Paper className={classNames(classes.post, postIndex % 2 === 1 && classes.oddPosts)}>
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
                          to={`/tags/${toSlug(tag)}`}
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
            >
              <ButtonBase
                focusRipple
                className={classes.readMoreButton}
                key={`${post.title}-readMore`}
                onClick={() => history.push(post.path)}
              >
                <div
                  className={classes.imageSrc}
                  style={{
                    backgroundColor: 'none',
                    backgroundImage: `url(${post.cover})`,
                  }}
                />
                <div className={classes.imageBackdrop} />
                <div className={classes.imageButton}>
                  <Typography
                    component="h3"
                    type="subheading"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    read more
                    <div className={classes.imageMarked} />
                  </Typography>
                </div>
              </ButtonBase>
            </footer>

          </Paper>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(PostListing));
