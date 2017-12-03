import PropTypes from 'prop-types';
import React from 'react';
import Author from '../Author/index';
import './index.css';

const SidebarContent = ({
                          author,
                        }) => (
  <aside className="sidebar">
    <header>
      <Author
        {...author}
      />
    </header>
  </aside>
);

SidebarContent.propTypes = {
  author: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    bio: PropTypes.string,
    fullName: PropTypes.string.isRequired,
  }).isRequired,
};

export default SidebarContent;
