import classNames from 'classnames';
import PropTypes from "prop-types";
import React from "react";
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import UserLinks from "../UserLinks/UserLinks";

const styles = theme => ({
  links: {
    flexDirection: 'row',
    fontSize: '2.5rem',
    width: '100%',
  },
  name: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  note: {
    fontSize: '0.9rem',
    marginTop: 0,
    textAlign: 'center',
  },
  vcard: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  }
});

const Author = ({
                  avatarUrl,
                  classes,
                  bio,
                  fullName,
                  links
                }) => (
  <div className={classNames('vcard', classes.vcard, 'print-no-spacing', 'print-no-decoration')}>
    <div className={classes.name}>
      <Typography className="fn" type="headline">{fullName}</Typography>
      <img className="photo" src={`${avatarUrl}?s=120`} alt="Avatar" />
    </div>
    <Typography paragraph type="body1" className={classNames('note', classes.note)}>{bio}</Typography>
    {links.length > 0 && (
      <div className={classes.links}>
        <UserLinks links={links} />
      </div>
    )}
  </div>
);

Author.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  bio: PropTypes.node.isRequired,
  fullName: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      iconClassName: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
};

Author.defaultProps = {
  links: []
};

export default withStyles(styles)(Author);
