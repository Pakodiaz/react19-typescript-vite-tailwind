import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import { Todo } from "../types/todo";
import Swal from "sweetalert2";
//import { toast } from "sonner";
import toast from "react-hot-toast";
import { TodoForm } from "./TodoForm";

export const TodoList = () => {
    const { todos, remove, loading } = useTodos();
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

    const handleDelete = async (id: number) => {
        const result = await Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar",
        });

        if (result.isConfirmed) {
            try {
                await remove(id);
                toast.success("Todo eliminado 🗑️");
            } catch (error) {
                toast.error("Error al eliminar");
            }
        }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Lista de Tareas</h2>
            <TodoForm
                initialTodo={editingTodo || undefined}
                onSuccess={() => setEditingTodo(null)}
            />
            {loading && <div className="text-center py-8 text-gray-500 animate-pulse">Cargando tareas...</div>}
            <ul className="space-y-2">

                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center border p-2 rounded-md shadow-sm"
                    >
                        <div>
                            <h3 className={`font-medium ${todo.completed ? "line-through text-gray-600" : "text-gray-800"}`}>
                                {todo.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {todo.completed ? "Completado ✅" : "Pendiente ⏳"}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setEditingTodo(todo)}
                                className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(todo.id)}
                                className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
