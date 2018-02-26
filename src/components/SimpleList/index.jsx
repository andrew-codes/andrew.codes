import PropTypes from "prop-types";
import React from "react";
import Typography from "material-ui/Typography";
import "./index.css";

const SimpleList = ({ items }) => (
  <ul className="simple-list">
    {items.map(item => (
      <li key={item}>
        <Typography type="body1">{item}</Typography>
      </li>
    ))}
  </ul>
);

SimpleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node)
};
SimpleList.defaultProps = {
  items: []
};

export default SimpleList;
