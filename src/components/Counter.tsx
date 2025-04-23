// src/components/Counter.tsx
import { useState } from 'react';

type CounterProps = {
    initialValue?: number;
};

export default function Counter({ initialValue = 0 }: CounterProps) {
    const [count, setCount] = useState<number>(initialValue);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);

    return (
        <div className="border p-4 rounded-xl shadow-md w-fit space-y-2">
            <p className="text-xl font-semibold">Contador: {count}</p>
            <div className="flex gap-2">
                <button
                    onClick={decrement}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    -1
                </button>
                <button
                    onClick={increment}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                    +1
                </button>
            </div>
        </div>
    );
}
