import React, { FC } from "react";

interface PageSelectProps {
  pages: number[];
  selectPage: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PageSelect: FC<PageSelectProps> = ({ pages, selectPage }) => {
  return (
    <select name='page-number' onChange={selectPage}>
      {pages.map((el) => (
        <option key={el}>{el}</option>
      ))}
    </select>
  );
};

export default PageSelect;
