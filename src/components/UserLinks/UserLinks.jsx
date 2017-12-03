import PropTypes from 'prop-types';
import React from "react";
import "./UserLinks.css";

const UserLinks = ({
                     labeled,
                     links,
                   }) => (
  <div className="user-links">
    {links.map(link =>
      <a key={link.url} href={link.url} title={link.label}>
        {labeled ? link.label : <i className={link.iconClassName}/>}
      </a>
    )}
  </div>
);

UserLinks.propTypes = {
  labeled: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    iconClassName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
};
UserLinks.defaultProps = {
  labeled: false,
  links: [],
};

export default UserLinks;
