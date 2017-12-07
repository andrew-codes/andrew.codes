import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from "react";
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  sectionTitle: {
    borderBottom: `1px solid ${theme.palette.primary[600]}`,
  },
  section: {
    minHeight: '100vh',
  },
});

class Resume extends Component {
  render() {
    const {
      classes,
      sections
    } = this.props;

    return (
      <div className="resume">
        <article>
          {sections.map((section) => (
            <section
              className={classes.section}
              key={`body-${section.slug}`}
            >
              <header>
                <Typography
                  gutterBottom
                  className={classes.sectionTitle}
                  type="display1"
                >
                  <a name={section.slug} id={section.slug}>{section.heading}</a>
                </Typography>
              </header>
              <div>
                {section.body}
              </div>
            </section>
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
