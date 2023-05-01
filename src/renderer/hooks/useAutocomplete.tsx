import { useState, useEffect } from 'react';

type useAutocompleteHook = {
  searchTerm: string;
  // eslint-disable-next-line no-undef
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  suggestions: string[];
};

function useAutocomplete(
  data: string[],
  maxSuggestions: number = 5
): useAutocompleteHook {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
      return;
    }

    // Remove illegal characters from searchTerm
    const sanitizedSearchTerm = searchTerm
      .trim()
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const searchRegex = new RegExp(sanitizedSearchTerm, 'i');
    const filteredData = data.filter(
      (item) =>
        searchRegex.test(item) &&
        item.toLowerCase() !== searchTerm.trim().toLowerCase()
    );
    setSuggestions(filteredData.slice(0, maxSuggestions));
  }, [searchTerm, data, maxSuggestions]);

  return { searchTerm, setSearchTerm, suggestions };
}


export default useAutocomplete;
