import GatsbyLink from 'gatsby-link';
import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  link: {
    color: theme.palette.primary[600],
    textDecoration: 'none',
  }
});
const Link = ({
                children,
                classes,
                to,
              }) => (
  <GatsbyLink className={classes.link} to={to}>{children}</GatsbyLink>
);

export default withStyles(styles)(Link);
