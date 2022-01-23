import React, {useState, useEffect} from 'react';
//custom hook for debouncing
export const useDebouncedEffect = (value, timeout) => {
  const [state, setState] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setState(value), timeout);
    return () => clearTimeout(handler);
  }, [value, timeout]);
  return state;
};
