import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(query)
    //onSearch(query);
  };

  return (
    <form className='pl-60  bg-gray-500 flex-row w-10' onSubmit={handleSubmit}>
      <input className='text-white'
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search problemicd10"
      />
      <button className='text-gray-200' type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
