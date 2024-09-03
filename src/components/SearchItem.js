import React from "react";

export const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        value={search}
        type="text"
        id="search"
        role="searchBox"
        placeholder="Search Items"
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};
