import React from "react";
import PropTypes from "prop-types";

const PageSelect = ({ pages, selectPage }) => {
  return (
    <select name='page-number' onChange={selectPage}>
      {pages.map((el) => (
        <option key={el}>{el}</option>
      ))}
    </select>
  );
};

export default PageSelect;

PageSelect.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectPage: PropTypes.func.isRequired,
};
