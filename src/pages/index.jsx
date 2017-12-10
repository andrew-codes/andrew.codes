import React from "react";
import {withStyles} from 'material-ui/styles';
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";

const styles = theme => ({
  container: {
    backgroundColor: 'gainsboro',
    minHeight: '100vh',
    padding: `${theme.spacing.unit * 2}px`,
    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
    },
  },
});

class Index extends React.Component {
  render() {
    const {
      classes,
    } = this.props;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className={classes.container}>
        <SEO postEdges={postEdges} />
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

export default withStyles(styles)(Index);

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          fileAbsolutePath
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
