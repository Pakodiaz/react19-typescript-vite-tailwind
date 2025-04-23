import { useUserContext } from "../context/UserContext";
import UserForm from "../components/API/UserFormContext.tsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const MySwal = withReactContent(Swal);

export default function CrudUsuarios() {
    const {
        users,
        addUser,
        deleteUser,
        updateUser,
        editingUser,
        setEditingUser,
    } = useUserContext();


    const confirmarEliminacion = (userId: number) => {
        MySwal.fire({
            title: "¿Estás seguro?",
            text: "¡Esta acción no se puede deshacer!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#e3342f",
            cancelButtonColor: "#6c757d",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(userId);
                MySwal.fire("¡Eliminado!", "El usuario ha sido eliminado.", "success");
            }
        });
    };

    return (
        <div className="max-w-xl mx-auto mt-10 space-y-8">
            <h1 className="text-2xl font-bold text-center">Gestión de Usuarios</h1>

            <UserForm
                onSubmit={editingUser ? updateUser : addUser}
                submitLabel={editingUser ? "Actualizar usuario" : "Crear usuario"}
                initialValues={editingUser || undefined}
            />

            <div className="space-y-4">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="p-4 border rounded-md shadow-sm bg-white flex justify-between items-center"
                    >
                        <div>
                            <p className="font-semibold text-gray-600">{user.name}</p>
                            <p className="text-sm text-gray-600">{user.email}</p>
                            <p className="text-sm text-gray-600">{user.phone}</p>
                        </div>
                        <div className="space-x-2">
                            <button
                                onClick={() => setEditingUser(user)}
                                className="text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => confirmarEliminacion(user.id!)}
                                className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
