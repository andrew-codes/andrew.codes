import classNames from 'classnames';
import Print from 'react-print';
import PropTypes from "prop-types";
import React from "react";
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import UserLinks from "../UserLinks/UserLinks";

const styles = theme => ({
  contactInfo: {
    marginBottom: `${theme.spacing.unit * 2}px`,
  },
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
                  address,
                  avatarUrl,
                  classes,
                  email,
                  bio,
                  fullName,
                  links,
                  phone,
                  resume,
                }) => (
  <div>
    <div
      className={classNames('vcard', classes.vcard, 'print-no-spacing', 'print-no-decoration', resume && 'print-hidden')}
    >
      <div className={classes.name}>
        <Typography className="fn" type="headline">{fullName}</Typography>
        <img className="photo" src={`${avatarUrl}?s=120`} alt="Avatar" />
      </div>
      <Typography
        paragraph
        type="body1"
        className={classNames('note', classes.note)}
      >
        {bio}</Typography>
      {links.length > 0 && (
        <div className={classes.links}>
          <UserLinks links={links} />
        </div>
      )}
    </div>
    {resume && (
      <Print>
        <div className={classes.contactInfo}>
          <Typography type="display2">{fullName}</Typography>
          {Boolean(address) &&
          <Typography component="address" type="body1">{address}</Typography>}
          {Boolean(phone) && <Typography type="body1">{phone}</Typography>}
          {Boolean(email) && <Typography type="body1">{email}</Typography>}
          {links.length > 0 && (
            <div className={classes.links}>
              <UserLinks links={links} />
            </div>
          )}
        </div>
      </Print>
    )}
  </div>
);

Author.propTypes = {
  address: PropTypes.string,
  avatarUrl: PropTypes.string.isRequired,
  bio: PropTypes.node.isRequired,
  email: PropTypes.string,
  fullName: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      iconClassName: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
  phone: PropTypes.string,
  resume: PropTypes.bool,
};

Author.defaultProps = {
  address: '',
  email: '',
  links: [],
  phone: '',
  resume: false,
};

export default withStyles(styles)(Author);
