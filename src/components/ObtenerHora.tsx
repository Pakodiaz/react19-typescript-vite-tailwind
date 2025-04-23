import { useEffect, useState } from 'react';

export default function Tiempo() {
    const [hora, setHora] = useState<string>('');

    useEffect(() => {
        const obtenerHora = () => {
            const ahora = new Date();
            setHora(ahora.toLocaleTimeString());
        };

        obtenerHora(); // Ejecutar inmediatamente

        const intervalo = setInterval(obtenerHora, 1000); // Actualizar cada segundo

        return () => {
            clearInterval(intervalo); // Limpiar al desmontar
        };
    }, []);

    return (
        <div className="text-center text-2xl mt-10 text-emerald-600">
            🕒 Hora actual: {hora}
        </div>
    );
}
