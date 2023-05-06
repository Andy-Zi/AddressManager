import React, { useState, useRef, useEffect } from 'react';
import { AiFillHome, AiOutlineUnorderedList } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import useAutocomplete from '../hooks/useAutocomplete';
import NavbarIcon from './NavbarIcon';
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

export default function Navbar() {
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
    <nav className="navbar">
      <ul className="navbar-list">
        <NavbarIcon icon={AiFillHome} to="/" label="Home" />
        <NavbarIcon
          icon={BsFillPeopleFill}
          to="/singleView"
          label="SingleView"
        />
        <NavbarIcon
          icon={AiOutlineUnorderedList}
          to="/listView"
          label="ListView"
        />
        <NavbarIcon icon={IoMdSettings} to="/settings" label="Settings" />
      </ul>
      <form onSubmit={handleSearchSubmit} className="navbar-searchBox">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          className="navbar-searchBox-input"
        />
        <button type="submit" className="navbar-searchBox-button">
          Search
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="navbar-searchBox-suggestions">
          {suggestions.map((suggestion, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={`navbar-searchBox-suggestions-item ${
                index === highlightedIndex
                  ? 'navbar-searchBox-suggestions-item-highlighted'
                  : ''
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
