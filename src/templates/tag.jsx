import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import { withStyles } from "material-ui/styles";
import config from "../../data/SiteConfig";

const styles = theme => ({
  container: {
    backgroundColor: "gainsboro",
    minHeight: "100vh",
    padding: `${theme.spacing.unit * 2}px`
  }
});
class TagTemplate extends React.Component {
  render() {
    const { classes } = this.props;
    const tag = this.props.pathContext.tag;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className={classes.container}>
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

export default withStyles(styles)(TagTemplate);

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          fileAbsolutePath
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
