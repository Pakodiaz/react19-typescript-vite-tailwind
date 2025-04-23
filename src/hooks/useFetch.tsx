// hooks/useFetch.ts
import { useEffect, useState } from 'react';

export function useFetch<T = unknown>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {

                const res = await fetch(url);

                // Asegúrate de manejar el error si la respuesta no es exitosa
                if (!res.ok) {
                    throw new Error('Error al obtener datos');
                }

                const json: T = await res.json();

                setData(json);

            } catch (err: any) {

                setError(`Error: ${err.message}`);

            } finally {

                setLoading(false);

            }
        };

        obtenerDatos();

    }, [url]);

    return { data, loading, error };

}
