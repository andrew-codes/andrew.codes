import Helmet from 'react-helmet';
import Paper from 'material-ui/Paper';
import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import config from '../../data/SiteConfig';
import PostListing from '../components/PostListing/PostListing';

const styles = theme => ({
  paper: {
    padding: `${theme.spacing.unit * 2}px`
  },
  container: {
    backgroundColor: 'gainsboro',
    minHeight: '100vh',
    padding: `${theme.spacing.unit * 2}px`,
    [theme.breakpoints.down('md')]: {
      paddingTop: 0
    }
  },
  heading: {
    borderBottom: `1px solid ${theme.palette.primary[600]}`
  },
  postsListingContainer: {
    marginTop: `${theme.spacing.unit * 6}px`
  }
});
class ContactPage extends Component {
  render() {
    const { classes } = this.props;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className={classes.container}>
        <Helmet title={`Page Not Found | ${config.siteTitle}`} />
        <Paper className={classes.paper}>
          <Typography gutterBottom className={classes.heading} type="display1">
            Page Not Found
          </Typography>
          <Typography gutterBottom type="body1">
            Oops, well this is embarrassing. It appears that the page you asked
            for cannot be found. But don{"'"}t worry, there are lots of other
            pages with great content to read!
          </Typography>

          <Typography gutterBottom component="h2">
            <strong>Where would you like to go now?</strong>
          </Typography>
          <div className={classes.postsListingContainer}>
            <PostListing postEdges={postEdges} />
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ContactPage);

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PageNotFoundQuery {
    allMarkdownRemark(
      limit: 4
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
