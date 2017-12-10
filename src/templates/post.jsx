import Link from 'gatsby-link';
import React from "react";
import Helmet from "react-helmet";
import Paper from 'material-ui/Paper';
import Typography from "material-ui/Typography";
import {withStyles} from 'material-ui/styles';
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";
import toSlug from "../toSlug";

const styles = theme => ({
    container: {
      backgroundColor: 'gainsboro',
      minHeight: '100vh',
      padding: `${theme.spacing.unit * 2}px`,
    },
    paper: {
      padding: `${theme.spacing.unit * 2}px`,
    },
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
    footer: {
      marginTop: `${theme.spacing.unit * 2}px`,
    },
    footerPaper:
      {
        padding: `${theme.spacing.unit * 2}px`,
      }
    ,
    title: {
      borderBottom: `1px solid ${theme.palette.primary[600]}`,
    }
    ,
  })
;

class PostTemplate extends React.Component {
  render() {
    const {
      classes
    } = this.props;
    const {slug} = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div className={classes.container}>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <article>
          <Paper className={classes.paper}>
            <header className={classes.postHeader}>
              <Typography type="headline">
                {post.title}
              </Typography>
              <div className={classes.postMeta}>
                <time
                  className={classes.postDate}
                  dateTime={new Date(post.date).toISOString()}
                >
                  {post.date}
                </time>
                <time className={classes.readTime}>{postNode.timeToRead} {postNode.timeToRead > 1 ? 'mins' : 'min'}</time>
              </div>
              <div className={classes.tagsContainer}>
                <span>- </span>
                <ul className={classes.tagList}>
                  {post.tags.map((tag, tagIndex) => (
                    <li className={classes.tag} key={tag}>
                      <Typography component="span" type="body1">
                        <Link
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
            <div dangerouslySetInnerHTML={{__html: postNode.html}} />
            <div className="post-meta">
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
            <UserInfo config={config} />
          </Paper>
          <footer className={classes.footer}>
            <Paper className={classes.footerPaper}>
              <Disqus postNode={postNode} />
            </Paper>
          </footer>
        </article>
      </div>
    );
  }
}

export default withStyles(styles)(PostTemplate);

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`;
