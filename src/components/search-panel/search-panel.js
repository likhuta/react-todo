import React from 'react';
import './search-panel.css';


const SearchPanel = ({onSearchChange}) => {
    return (
        <input type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={ (e) => onSearchChange(e.target.value)} />
    )
  }

  export default SearchPanel;


