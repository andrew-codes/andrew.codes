import classNames from 'classnames';
import React, {Component} from "react";
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  container: {
    backgroundColor: 'gainsboro',
    minHeight: '100vh',
    padding: `${theme.spacing.unit * 2}px`,
  },
  paper: {
    padding: `${theme.spacing.unit * 2}px`,
    minHeight: `calc(100vh - ${theme.spacing.unit * 4}px)`,
  },
});

const FullHeightPage = ({
                          classes,
                          className,
                          children,
                        }) => (
  <div className={classNames(classes.container, 'print-no-spacing', 'print-no-decoration', className)}>
    <Paper className={classes.paper}>
      {children}
    </Paper>
  </div>
);

export default withStyles(styles)(FullHeightPage);
