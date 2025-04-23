import { useInput } from "../hooks/useInput";
import { useFetch } from '../hooks/useFetch';

type Usuario = {
    id: number;
    name: string;
    email: string;
};


export default function CustomHook() {
    const nombre = useInput('');
    const correo = useInput('');

    const { data, loading, error } = useFetch<Usuario[]>(
        'https://jsonplaceholder.typicode.com/users'
    );

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className="max-w-md mx-auto mt-10 space-y-4">
                <input
                    type="text"
                    placeholder="Nombre"
                    {...nombre}
                    className="w-full border rounded px-3 py-2"
                />
                <input
                    type="email"
                    placeholder="Correo"
                    {...correo}
                    className="w-full border rounded px-3 py-2"
                />
                <p className="text-sm text-gray-600">
                    Nombre: {nombre.value} | Correo: {correo.value}
                </p>
            </div>

            <br/>
            <hr/>
            <br/>
            <h2>Usuarios cargados correctamente...</h2>
            <br/>
            <ul className="space-y-4">
                {data?.map((usuario) => (
                    <li
                        key={usuario.id}
                        className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-100 transition-colors"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900">{usuario.name}</h3>
                        <p className="text-gray-700">{usuario.email}</p>
                    </li>
                ))}
            </ul>
        </>

    );
}
