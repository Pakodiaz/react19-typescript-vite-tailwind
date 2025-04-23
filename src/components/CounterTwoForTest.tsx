// src/components/Counter/Counter.tsx
import { useState } from 'react';

interface CounterProps {
    initialValue?: number;
    step?: number;
    onCountChange?: (count: number) => void;
}

/**
 * Un componente simple de contador que incrementa o decrementa un valor
 */
export function Counter({
                            initialValue = 0,
                            step = 1,
                            onCountChange
                        }: CounterProps) {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        const newCount = count + step;
        setCount(newCount);
        onCountChange?.(newCount);
    };

    const decrement = () => {
        const newCount = count - step;
        setCount(newCount);
        onCountChange?.(newCount);
    };

    return (
        <div className="counter" data-testid="counter-component">
            <h2>Counter: {count}</h2>
            <div className="counter-controls">
                <button
                    onClick={decrement}
                    aria-label="Decrement"
                    data-testid="decrement-button"
                >
                    -
                </button>
                <span data-testid="count-value">{count}</span>
                <button
                    onClick={increment}
                    aria-label="Increment"
                    data-testid="increment-button"
                >
                    +
                </button>
            </div>
        </div>
    );
}