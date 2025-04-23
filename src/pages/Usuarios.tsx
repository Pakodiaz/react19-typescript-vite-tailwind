import {useState} from "react";
import TarjetaUsuario from "../components/TarjetaUsuario.tsx";
import {User} from "../types/User";

export default function Usuarios() {
    const [usuarios] = useState<User[]>([
        { id: 1, name: 'Juan Pérez', email: 'juan@correo.com' },
        { id: 2, name: 'Ana López', email: 'ana@correo.com' },
        { id: 3, name: 'Carlos Díaz', email: 'carlos@correo.com' },
    ]);

    const sinUsuarios = usuarios.length === 0;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-indigo-600">Lista de Usuarios</h1>

            {sinUsuarios ? (
                <p className="text-gray-500">No hay usuarios disponibles.</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {usuarios.map((usuario) => (
                            <TarjetaUsuario key={usuario.id} user={usuario} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );


}