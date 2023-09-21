import React from "react";

function Filter({
  onCategoryChange,
  selectedCategory,
  search,
  onSearchChange,
}) {
  function handleSearch(event) {
    onSearchChange(event.target.value);
  }
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />
      <select
        name="filter"
        value={selectedCategory}
        onChange={onCategoryChange}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
