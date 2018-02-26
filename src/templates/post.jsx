import classNames from "classnames";
import React from "react";
import Helmet from "react-helmet";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import config from "../../data/SiteConfig";
import Disqus from "../components/Disqus/Disqus";
import SEO from "../components/SEO/SEO";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import PostHeading from "../components/PostHeading";
import UserInfo from "../components/UserInfo/UserInfo";
import "./b16-tomorrow-dark.css";
import "./post.css";

const styles = theme => ({
  container: {
    backgroundColor: "gainsboro",
    minHeight: "100vh",
    padding: `${theme.spacing.unit * 2}px`
  },
  paper: {
    padding: `${theme.spacing.unit * 2}px`
  },
  footer: {
    marginTop: `${theme.spacing.unit * 2}px`
  },
  footerPaper: {
    padding: `${theme.spacing.unit * 2}px`
  },
  title: {
    borderBottom: `1px solid ${theme.palette.primary[600]}`
  }
});

class PostTemplate extends React.Component {
  render() {
    const { classes } = this.props;
    const { slug } = this.props.pathContext;
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
          <Paper
            className={classNames(
              classes.paper,
              "print-no-spacing",
              " print-no-decoration"
            )}
          >
            <PostHeading {...post} timeToRead={postNode.timeToRead} />
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
            <div className="print-hidden">
              <UserInfo config={config} />
            </div>
          </Paper>
          <footer className={classNames(classes.footer, "print-hidden")}>
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
