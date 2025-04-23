import { useForm } from "react-hook-form";
import { useTodos } from "../context/TodoContext";
import { Todo } from "../types/todo";
//import { toast } from "sonner";
import toast from "react-hot-toast";
import { useEffect } from "react";

type Props = {
    initialTodo?: Todo;
    onSuccess?: () => void;
};

export const TodoForm = ({ initialTodo, onSuccess }: Props) => {
    const { add, update } = useTodos();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Omit<Todo, "id">>({
        defaultValues: { title: "", completed: false },
    });

    useEffect(() => {
        if (initialTodo) {
            reset({ title: initialTodo.title, completed: initialTodo.completed });
        }
    }, [initialTodo, reset]);

    const onSubmit = async (data: Omit<Todo, "id">) => {
        try {
            if (initialTodo) {
                await update({ ...initialTodo, ...data });
                toast.success("Todo actualizado ✅");
            } else {
                await add(data);
                toast.success("Todo creado 📝");
            }
            reset();
            onSuccess?.();
        } catch (error) {
            toast.error("Ocurrió un error al guardar");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <input
                    type="text"
                    placeholder="Título del todo"
                    {...register("title", { required: "Este campo es obligatorio" })}
                    className="w-full p-2 border rounded-md text-gray-800"
                />
                {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
            </div>
            <div className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" {...register("completed")} />
                <label>¿Completado?</label>
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
                {initialTodo ? "Actualizar" : "Agregar"}
            </button>
        </form>
    );
};
