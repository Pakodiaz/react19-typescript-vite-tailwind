import { useState } from 'react';

/**
 * A custom hook for managing a counter state
 * @param initialValue - The initial value for the counter
 * @returns An object containing the counter value and functions to manipulate it
 */
export function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return {
    count,
    increment,
    decrement,
    reset
  };
}