import classNames from 'classnames';
import Helmet from "react-helmet";
import React, {Component} from "react";
import {withStyles} from 'material-ui/styles';
import config from "../../data/SiteConfig";
import Resume from '../components/Resume';
import resumeSections from '../resumeSections';
import './print.css';

const styles = theme => ({
  container: {
    backgroundColor: 'gainsboro',
    minHeight: '100vh',
    padding: `${theme.spacing.unit * 2}px`,
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
        <Resume sections={resumeSections} />
      </div>
    );
  }
}

export default withStyles(styles)(ResumePage);
