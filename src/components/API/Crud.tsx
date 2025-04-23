import { useState, useEffect } from "react";

// Tipado de datos de un usuario
type Usuario = {
    id: number;
    name: string;
    email: string;
    phone: string;
};

export default function CrudUsuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [newUser, setNewUser] = useState<Usuario>({
        id: 0,
        name: "",
        email: "",
        phone: "",
    });
    const [editUser, setEditUser] = useState<Usuario | null>(null);

    // Cargar usuarios
    useEffect(() => {
        const fetchUsuarios = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsuarios(data);
        };
        fetchUsuarios();
    }, []);

    // Crear nuevo usuario
    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });

        const createdUser = await response.json();
        setUsuarios([...usuarios, createdUser]);
        setNewUser({ id: 0, name: "", email: "", phone: "" });
    };

    // Actualizar usuario
    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!editUser) return;

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${editUser.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editUser),
            }
        );

        const updatedUser = await response.json();
        setUsuarios(
            usuarios.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            )
        );
        setEditUser(null);
    };

    // Eliminar usuario
    const handleDelete = async (id: number) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            {
                method: "DELETE",
            }
        );

        if (response.ok) {
            setUsuarios(usuarios.filter((user) => user.id !== id));
        } else {
            alert("Error al eliminar el usuario");
        }
    };

    return (
        <div className="container mx-auto p-6 space-y-6">
            <h1 className="text-4xl font-bold text-center text-gray-800">Gestión de Usuarios</h1>

            {/* Crear Nuevo Usuario */}
            <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Crear Usuario</h2>
                <form onSubmit={handleCreate} className="space-y-4">
                    <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="Nombre"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    />
                    <input
                        type="email"
                        className="w-full p-2 border rounded-md"
                        placeholder="Email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    />
                    <input
                        type="tel"
                        className="w-full p-2 border rounded-md"
                        placeholder="Teléfono"
                        value={newUser.phone}
                        onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Crear Usuario
                    </button>
                </form>
            </div>

            {/* Editar Usuario */}
            {editUser && (
                <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-lg ">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Actualizar Usuario</h2>
                    <form onSubmit={handleUpdate} className="space-y-4">
                        <input
                            type="text"
                            className="w-full p-2 border rounded-md"
                            placeholder="Nombre"
                            value={editUser.name}
                            onChange={(e) =>
                                setEditUser({ ...editUser, name: e.target.value })
                            }
                        />
                        <input
                            type="email"
                            className="w-full p-2 border rounded-md"
                            placeholder="Email"
                            value={editUser.email}
                            onChange={(e) =>
                                setEditUser({ ...editUser, email: e.target.value })
                            }
                        />
                        <input
                            type="tel"
                            className="w-full p-2 border rounded-md"
                            placeholder="Teléfono"
                            value={editUser.phone}
                            onChange={(e) =>
                                setEditUser({ ...editUser, phone: e.target.value })
                            }
                        />
                        <button
                            type="submit"
                            className="w-full bg-yellow-600 text-white p-2 rounded-md hover:bg-yellow-700 transition-colors"
                        >
                            Actualizar Usuario
                        </button>
                    </form>
                </div>
            )}

            {/* Mostrar lista de usuarios */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-lg border border-gray-200">
                    <thead>
                    <tr className="border-b">
                        <th className="py-2 px-4 text-left text-gray-700">ID</th>
                        <th className="py-2 px-4 text-left text-gray-700">Nombre</th>
                        <th className="py-2 px-4 text-left text-gray-700">Email</th>
                        <th className="py-2 px-4 text-left text-gray-700">Teléfono</th>
                        <th className="py-2 px-4 text-left text-gray-700">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id} className="border-b hover:bg-gray-100">
                            <td className="py-2 px-4 text-gray-700">{usuario.id}</td>
                            <td className="py-2 px-4 text-gray-700">{usuario.name}</td>
                            <td className="py-2 px-4 text-gray-700">{usuario.email}</td>
                            <td className="py-2 px-4 text-gray-700">{usuario.phone}</td>
                            <td className="py-2 px-4 text-gray-700 flex space-x-2">
                                <button
                                    onClick={() => setEditUser(usuario)}
                                    className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDelete(usuario.id)}
                                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
