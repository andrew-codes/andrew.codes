import Button from 'material-ui/Button';
import classNames from 'classnames';
import IconButton from 'material-ui/IconButton';
import PropTypes from "prop-types";
import React from "react";
import {withStyles} from 'material-ui/styles';
import "./UserLinks.css";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    textAlign: 'center',
    width: '100%',
  },
  icon: {
    color: theme.palette.primary[500],
    fontSize: '2rem',
  }
});

const UserLinks = ({
                     classes,
                     labeled,
                     links
                   }) => (
  <div className={classes.container}>
    {links.map(link => (
      labeled ? (
          <Button>
            <a
              key={link.url}
              href={link.url}
              title={link.label}
            >
              {link.label}
            </a>
          </Button>
        )
        : (
          <IconButton>
            <a
              key={link.url}
              href={link.url}
              title={link.label}
            >
              <i className={classNames(link.iconClassName, classes.icon)}/>
            </a>
          </IconButton>
        )
    ))}
  </div>
);

UserLinks.propTypes = {
  labeled: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      iconClassName: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
};
UserLinks.defaultProps = {
  labeled: false,
  links: []
};

export default withStyles(styles)(UserLinks);
