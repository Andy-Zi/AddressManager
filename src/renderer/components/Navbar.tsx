import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAutocomplete from '../hooks/useAutocomplete';

// Dummy data for autocomplete suggestions
const clientNames = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Frank',
  'Grace',
  'Heidi',
  'Ivan',
  'Judy',
];

function Navbar() {
  const { searchTerm, setSearchTerm, suggestions } =
    useAutocomplete(clientNames);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchInputRef = useRef<HTMLInputElement>(null);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value);
  }

  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Searching for:', searchTerm);
    // Perform the search operation with the searchTerm.
  }

  function handleSuggestionClick(suggestion: string): void {
    setSearchTerm(suggestion);
  }

  function handleKeyDown(e: React.KeyboardEvent): void {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prevIndex) =>
        Math.min(prevIndex + 1, suggestions.length - 1)
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, -1));
    } else if (e.key === 'Enter' && highlightedIndex !== -1) {
      e.preventDefault();
      setSearchTerm(suggestions[highlightedIndex]);
      setHighlightedIndex(-1);
    }
  }

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [suggestions]);

  return (
    <nav className="bg-gray-800 px-4 py-2 flex justify-between items-center">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white text-lg no-underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/clients" className="text-white text-lg no-underline">
            Clients
          </Link>
        </li>
        <li>
          <Link to="/listview" className="text-white text-lg no-underline">
            ListView
          </Link>
        </li>
        <li>
          <Link to="/settings" className="text-white text-lg no-underline">
            Settings
          </Link>
        </li>
      </ul>
      <form onSubmit={handleSearchSubmit} className="flex">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          className="rounded-l px-3 py-1 border border-r-0 border-gray-300 focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="bg-gray-700 rounded-r px-4 py-1 text-white border border-l-0 border-gray-300 cursor-pointer"
        >
          Search
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="absolute right-24 top-14 bg-white border border-gray-300 rounded shadow-md z-10">
          {suggestions.map((suggestion, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={`px-4 py-1 cursor-pointer ${
                index === highlightedIndex ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
