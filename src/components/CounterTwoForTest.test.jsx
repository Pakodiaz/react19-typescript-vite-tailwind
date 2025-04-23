// src/components/Counter/Counter.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter Component', () => {
    // Test básico para verificar que el componente se renderiza
    it('renders correctly with default values', () => {
        render(<Counter />);

        // Verificamos que el componente existe en el documento
        expect(screen.getByTestId('counter-component')).toBeInTheDocument();

        // Verificamos el valor inicial (0 por defecto)
        expect(screen.getByTestId('count-value')).toHaveTextContent('0');
    });

    // Test para verificar que acepta un valor inicial personalizado
    it('accepts and displays custom initial value', () => {
        render(<Counter initialValue={10} />);
        expect(screen.getByTestId('count-value')).toHaveTextContent('10');
    });

    // Test para incrementar el contador
    it('increments count when increment button is clicked', async () => {
        // Configuración del usuario para pruebas de interacción
        const user = userEvent.setup();
        render(<Counter />);

        // Obtenemos el botón de incremento
        const incrementButton = screen.getByTestId('increment-button');

        // Hacemos clic con userEvent (simula mejor la interacción real del usuario)
        await user.click(incrementButton);

        // Verificamos que el contador ha aumentado
        expect(screen.getByTestId('count-value')).toHaveTextContent('1');
    });

    // Test para decrementar el contador
    it('decrements count when decrement button is clicked', async () => {
        const user = userEvent.setup();
        render(<Counter initialValue={5} />);

        const decrementButton = screen.getByTestId('decrement-button');
        await user.click(decrementButton);

        expect(screen.getByTestId('count-value')).toHaveTextContent('4');
    });

    // Test para verificar que funciona con un paso personalizado
    it('increments and decrements by custom step value', async () => {
        const user = userEvent.setup();
        render(<Counter step={5} />);

        // Incrementamos y verificamos
        await user.click(screen.getByTestId('increment-button'));
        expect(screen.getByTestId('count-value')).toHaveTextContent('5');

        // Incrementamos otra vez
        await user.click(screen.getByTestId('increment-button'));
        expect(screen.getByTestId('count-value')).toHaveTextContent('10');

        // Decrementamos y verificamos
        await user.click(screen.getByTestId('decrement-button'));
        expect(screen.getByTestId('count-value')).toHaveTextContent('5');
    });

    // Test para verificar que la función callback se llama
    it('calls onCountChange when count changes', async () => {
        // Creamos un mock para la función de callback
        const mockOnCountChange = vi.fn();
        const user = userEvent.setup();

        render(<Counter onCountChange={mockOnCountChange} />);

        // Incrementamos
        await user.click(screen.getByTestId('increment-button'));

        // Verificamos que el callback se llamó con el valor correcto
        expect(mockOnCountChange).toHaveBeenCalledTimes(1);
        expect(mockOnCountChange).toHaveBeenCalledWith(1);

        // Decrementamos
        await user.click(screen.getByTestId('decrement-button'));

        // Verificamos que el callback se llamó de nuevo
        expect(mockOnCountChange).toHaveBeenCalledTimes(2);
        expect(mockOnCountChange).toHaveBeenCalledWith(0);
    });
});