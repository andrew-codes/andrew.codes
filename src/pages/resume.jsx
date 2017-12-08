import Helmet from "react-helmet";
import React, {Component} from "react";
import {withStyles} from 'material-ui/styles';
import config from "../../data/SiteConfig";
import Resume from '../components/Resume';
import resumeSections from '../resumeSections';

const styles = theme => ({
  container: {
    backgroundColor: 'gainsboro',
    margin: '-1rem',
    padding: '1rem',
  }
});
class ResumePage extends Component {
  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.container}>
        <Helmet title={`Resume | ${config.siteTitle}`} />
        <Resume sections={resumeSections} />
      </div>
    );
  }
}

export default withStyles(styles)(ResumePage);
