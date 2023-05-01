// src/useAutocomplete.ts
import { useState, useEffect } from 'react';

type AutocompleteHook = {
  searchTerm: string;
  // eslint-disable-next-line no-undef
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  suggestions: string[];
};

function Autocomplete(
  data: string[],
  maxSuggestions: number = 5
): AutocompleteHook {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
      return;
    }

    const searchRegex = new RegExp(searchTerm.trim(), 'i');
    const filteredData = data.filter(
      (item) =>
        searchRegex.test(item) &&
        item.toLowerCase() !== searchTerm.trim().toLowerCase()
    );
    setSuggestions(filteredData.slice(0, maxSuggestions));
  }, [searchTerm, data, maxSuggestions]);

  return { searchTerm, setSearchTerm, suggestions };
}

export default Autocomplete;
