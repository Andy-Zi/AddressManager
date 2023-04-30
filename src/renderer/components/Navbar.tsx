// src/Navbar.tsx
import React, { useState, useRef, useEffect } from 'react';
import Autocomplete from './Autocomplete';

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

function Navbar(): JSX.Element {
  const { searchTerm, setSearchTerm, suggestions } = Autocomplete(clientNames);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchInputRef = useRef<HTMLInputElement>(null);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value);
  }

  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Perform the search operation with the searchTerm.
  }

  function handleSuggestionClick(suggestion: string): void {
    setSearchTerm(suggestion);
  }

  function handleKeyDown(e: React.KeyboardEvent): void {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => Math.min(prevIndex + 1, suggestions.length - 1));
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
    <nav style={styles.navbar}>
      <ul style={styles.ul}>
        <li style={styles.li}><a href="/" style={styles.a}>Home</a></li>
        <li style={styles.li}><a href="/clients" style={styles.a}>Clients</a></li>
        <li style={styles.li}><a href="/settings" style={styles.a}>Settings</a></li>
      </ul>
      <form onSubmit={handleSearchSubmit} style={styles.searchForm}>
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchButton}>Search</button>
      </form>
      {suggestions.length > 0 && (
        <ul style={styles.suggestions}>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              style={index === highlightedIndex ? styles.highlightedSuggestion : styles.suggestion}
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

const styles = {
  navbar: {
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    padding: '0 20px',
  },
  ul: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  li: {
    margin: '0 10px',
  },
  a: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
  searchForm: {
    display: 'flex',
  },
  searchInput: {
    height: '30px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    paddingLeft: '5px',
  },
  searchButton: {
    marginLeft: '5px',
    height: '30px',
    backgroundColor: '#555',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  suggestions: {
    position: 'absolute',
    top: '60px',
    right: '70px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '3px',
    listStyle: 'none',
    padding: '5px',
    zIndex: 1,
  },
  suggestion: {
    padding: '5px',
    cursor: 'pointer',
  },
  highlightedSuggestion: {
    padding: '5px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
  },
}

export default Navbar;
