import { renderHook, act } from '@testing-library/react-hooks';
import useAutocomplete from '../../renderer/hooks/useAutocomplete';

describe('Autocomplete', () => {
  const data = [
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

  test('returns an empty array when searchTerm is empty', () => {
    const { result } = renderHook(() => useAutocomplete(data));

    expect(result.current.searchTerm).toBe('');
    expect(result.current.suggestions).toEqual([]);
  });

  test('returns filtered suggestions based on searchTerm', () => {
    const { result } = renderHook(() => useAutocomplete(data));

    act(() => {
      result.current.setSearchTerm('a');
    });

    expect(result.current.searchTerm).toBe('a');
    expect(result.current.suggestions).toEqual([
      'Alice',
      'Charlie',
      'David',
      'Frank',
      'Grace',
    ]);
  });

  test('limits suggestions to maxSuggestions', () => {
    const { result } = renderHook(() => useAutocomplete(data, 3));

    act(() => {
      result.current.setSearchTerm('a');
    });

    expect(result.current.searchTerm).toBe('a');
    expect(result.current.suggestions).toEqual(['Alice', 'Charlie', 'David']);
  });

  test('does not include searchTerm in suggestions', () => {
    const { result } = renderHook(() => useAutocomplete(data));

    act(() => {
      result.current.setSearchTerm('Alic');
    });

    expect(result.current.searchTerm).toBe('Alic');
    expect(result.current.suggestions).toEqual(['Alice']);

    act(() => {
      result.current.setSearchTerm('Alice');
    });

    expect(result.current.searchTerm).toBe('Alice');
    expect(result.current.suggestions).toEqual([]);
  });

  test('filters suggestions without considering illegal characters', () => {
    const { result } = renderHook(() => useAutocomplete(data));

    act(() => {
      result.current.setSearchTerm('e');
    });

    expect(result.current.searchTerm).toBe('e');
    expect(result.current.suggestions).toEqual([
      'Alice',
      'Charlie',
      'Eve',
      'Grace',
      'Heidi',
    ]);

    act(() => {
      result.current.setSearchTerm('e)');
    });

    expect(result.current.searchTerm).toBe('e)');
    expect(result.current.suggestions).toEqual([]);
  });
});
