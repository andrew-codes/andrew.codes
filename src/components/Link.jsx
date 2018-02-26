import GatsbyLink from "gatsby-link";
import React from "react";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  link: {
    color: theme.palette.primary[600],
    textDecoration: "none"
  }
});
const Link = ({ children, classes, to }) =>
  to.indexOf("http" === 0) ? (
    <a href={to} className={classes.link}>
      {children}
    </a>
  ) : (
    <GatsbyLink className={classes.link} to={to}>
      {children}
    </GatsbyLink>
  );

export default withStyles(styles)(Link);
