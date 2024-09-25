import { useState, useEffect } from 'react';

/**
 * useDebounce hook to debounce any fast changing value.
 * @param {any} value - The value to debounce.
 * @param {number} delay - The number of milliseconds to delay.
 * @returns The debounced value.
 */
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value or delay changes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-call effect if value or delay changes

  return debouncedValue;
}
