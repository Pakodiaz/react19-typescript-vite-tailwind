import { useState } from "react";
import UserForm, { User } from "../components/API/UserForm";
import toast from "react-hot-toast";

export default function CrudUsuariosPage() {
    const [users, setUsers] = useState<User[]>([]);

    const addUser = (newUser: User) => {
        const userWithId = { ...newUser, id: Date.now() };
        setUsers((prev) => [...prev, userWithId]);
        toast.success("Usuario agregado correctamente!");
    };

    const deleteUser = (id: number) => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
        toast.success("Usuario eliminado");
    };

    return (
        <div className="max-w-xl mx-auto mt-10 space-y-8">
            <h1 className="text-2xl font-bold text-center">Gestión de Usuarios</h1>

            <UserForm onSubmit={addUser} submitLabel="Crear usuario" />

            <div className="space-y-4">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="p-4 border rounded-md shadow-sm bg-white flex justify-between items-center"
                    >
                        <div>
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-sm text-gray-600">{user.email}</p>
                            <p className="text-sm text-gray-600">{user.phone}</p>
                        </div>
                        <button
                            onClick={() => deleteUser(user.id!)}
                            className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
