import classNames from 'classnames';
import Helmet from "react-helmet";
import React, {Component} from "react";
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import config from "../../data/SiteConfig";
import ContactForm from '../components/ContactForm/index';

const styles = theme => ({
  container: {
    backgroundColor: 'gainsboro',
    minHeight: '100vh',
    padding: `${theme.spacing.unit * 2}px`,
  },
  paper: {
    padding: `${theme.spacing.unit * 2}px`,
  },
  heading: {
    borderBottom: `1px solid ${theme.palette.primary[600]}`,
  },
});

class ResumePage extends Component {
  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classNames(classes.container, 'print-no-spacing', 'print-no-decoration')}>
        <Helmet title={`Resume | ${config.siteTitle}`} />
        <Paper className={classes.paper}>
          <Typography
            gutterBottom
            className={classes.heading}
            type="display1"
          >
            Contact
          </Typography>
          <ContactForm />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ResumePage);
