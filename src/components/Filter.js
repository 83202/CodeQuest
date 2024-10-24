import React from 'react';

function Filters({ setFilter }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="filters">
      <label htmlFor="filter">Filter By:</label>
      <select id="filter" onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="stackoverflow">Stack Overflow</option>
        <option value="reddit">Reddit</option>
      </select>
    </div>
  );
}

export default Filters;
