// Importa las extensiones de jest-dom para tener aserciones adicionales
import '@testing-library/jest-dom';

// Esto habilita automáticamente todas las utilidades de jest-dom para tus pruebas
// Ahora podrás usar métodos como toBeInTheDocument(), toHaveClass(), etc.

// Limpia después de cada prueba para evitar contaminación entre tests
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Limpia automáticamente después de cada prueba
afterEach(() => {
    cleanup();
});

// Silencia los errores de consola esperados durante las pruebas
// Útil para pruebas que intencionalmente producen errores
const originalConsoleError = console.error;
console.error = (...args) => {
    if (
        /Warning: ReactDOM.render is no longer supported in React 18/.test(args[0]) ||
        /Warning: useLayoutEffect does nothing on the server/.test(args[0])
    ) {
        return;
    }
    originalConsoleError(...args);
};