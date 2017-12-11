import classNames from 'classnames';
import React, {Component} from "react";
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  container: {
    backgroundColor: 'gainsboro',
    padding: `${theme.spacing.unit * 2}px`,
    minHeight: '100vh',
  },
  paper: {
    minHeight: `calc(100vh - ${theme.spacing.unit * 4}px)`,
    padding: `${theme.spacing.unit * 2}px`,
  },
});

const FullHeightPage = ({
                          backgroundColor,
                          classes,
                          className,
                          children,
                        }) => (
  <div className={classNames(classes.container, 'print-no-spacing', 'print-no-decoration', className)}>
    <Paper
      className={classNames(classes.container, 'print-no-spacing', 'print-no-decoration', classes.paper)}
      style={{
        backgroundColor,
      }}
    >
      {children}
    </Paper>
  </div>
);
FullHeightPage.defaultProps = {
  backgroundColor: '#fff',
};

export default withStyles(styles)(FullHeightPage);
