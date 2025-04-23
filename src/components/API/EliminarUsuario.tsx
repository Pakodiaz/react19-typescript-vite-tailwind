export default function EliminarUsuario({ id }: { id: number }) {
    const handleDelete = async () => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            {
                method: "DELETE",
            }
        );

        if (response.ok) {
            console.log("Usuario eliminado correctamente.");
        } else {
            console.error("Error al eliminar el usuario.");
        }
    };

    return (
        <div className="p-4">
            <button
                onClick={handleDelete}
                className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
            >
                Eliminar Usuario
            </button>
        </div>
    );
}
