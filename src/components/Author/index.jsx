import PropTypes from 'prop-types';
import React from 'react';
import UserLinks from '../UserLinks/UserLinks';
import './index.css';

const Author = ({
                  avatarUrl,
                  bio,
                  fullName,
                  links,
                }) => (
  <div className="vcard">
    <div>
      <h1 className="fn">{fullName}</h1>
      <img className="photo" src={`${avatarUrl}?s=120`} alt="Avatar"/>
    </div>
    <p className="note">{bio}</p>
    {links.length > 0 && (
      <div className="links">
        <UserLinks
          links={links}
        />
      </div>
    )}
  </div>
);

Author.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    iconClassName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }))
};

Author.defaultProps = {
  links: [],
};

export default Author;
