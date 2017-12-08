import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import React, {Component} from "react";
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  resume: {
    backgroundColor: 'gainsboro',
  },
  sectionTitle: {
    borderBottom: `1px solid ${theme.palette.primary[600]}`,
  },
  section: {
    padding: '1rem',
    minHeight: 'calc(100vh - 2rem)',
    marginBottom: '1rem',
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
      <div className={classes.resume}>
        <article>
          {sections.map((section) => (
            <Paper className={classes.section}>
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
            </Paper>
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
