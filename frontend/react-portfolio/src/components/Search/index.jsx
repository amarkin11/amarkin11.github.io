import React from 'react';

const Search = ({term, onSearchChange}) => {

  const onChange = (e) => {
    const val = e.target.value;
    onSearchChange(val);
  };

  return(
    <input
      className="input"
      type="search"
      placeholder="Поиск"
      value={term}
      onChange={(e) => onChange(e)}
    />
  )
};

export default Search;
