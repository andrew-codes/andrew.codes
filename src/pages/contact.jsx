import classNames from 'classnames';
import Helmet from "react-helmet";
import React, {Component} from "react";
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import config from "../../data/SiteConfig";
import ContactForm from '../components/ContactForm/index';
import FullHeightPaper from '../components/FullHeightPaper';

const styles = theme => ({
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
      <FullHeightPaper>
        <Helmet title={`Resume | ${config.siteTitle}`} />
        <Typography
          gutterBottom
          className={classes.heading}
          type="display1"
        >
          Contact
        </Typography>
        <ContactForm />
      </FullHeightPaper>
    );
  }
}

export default withStyles(styles)(ResumePage);
