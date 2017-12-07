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

const styles = theme => ({
  paper: {
    margin: `-1rem`,
    padding: `${theme.spacing.unit * 2}px`,
  },
  footer: {
    marginTop: `1.5rem`,
  },
  title: {
    borderBottom: `1px solid ${theme.palette.primary[600]}`,
  },
});

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
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <article>
          <Paper className={classes.paper}>
            <Typography
              className={classes.title}
              type="display1"
            >
              {post.title}
            </Typography>
            <div dangerouslySetInnerHTML={{__html: postNode.html}} />
            <div className="post-meta">
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
            <UserInfo config={config} />
          </Paper>
          <footer className={classes.footer}>
            <Disqus postNode={postNode} />
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
      excerpt
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
