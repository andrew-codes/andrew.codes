import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import React, {Component} from "react";
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import FullHeightPaper from '../FullHeightPaper';

const styles = theme => ({
  resume: {
  },
  sectionTitle: {
    borderBottom: `1px solid ${theme.palette.primary[600]}`,
  },
  section: {
    [theme.breakpoints.down('md')]: {
      minHeight: 'auto',
    }
  },
});

class Resume extends Component {
  render() {
    const {
      classes,
      sections
    } = this.props;

    return (
      <div className={classNames(classes.resume, 'print-no-decoration')}>
        <article>
          {sections.map((section) => (
            <FullHeightPaper className={classNames(classes.section, 'print-no-pagebreak')}>
              <section
                key={`body-${section.slug}`}
              >
                <header>
                  <Typography
                    gutterBottom
                    className={classes.sectionTitle}
                    type="display1"
                  >
                    <span data-name={section.slug}>{section.heading}</span>
                  </Typography>
                </header>
                <div>
                  {section.body}
                </div>
              </section>
            </FullHeightPaper>
          ))}
        </article>
      </div>
    );
  }
}

Resume.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string.isRequired,
    body: PropTypes.node.isRequired,
  })),
};
Resume.defaultProps = {
  sections: [],
};
export default withStyles(styles)(Resume);
