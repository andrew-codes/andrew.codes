import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

const SimpleList = ({
                      items,
                    }) => (
  <ul className="simple-list">
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

SimpleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node),
};
SimpleList.defaultProps = {
  items: [],
};

export default SimpleList;
