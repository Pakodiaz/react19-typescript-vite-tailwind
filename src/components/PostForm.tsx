import { useForm } from "react-hook-form";
import { Post } from "../types/Post";

interface Props {
    onSubmit: (data: Post) => void;
    defaultValues?: Post;
}

export const PostForm = ({ onSubmit, defaultValues }: Props) => {
    const { register, handleSubmit, reset } = useForm<Post>({
        defaultValues: defaultValues || { title: "", body: "", userId: 1 },
    });

    return (
        <form
            onSubmit={handleSubmit((data) => {
                onSubmit(data);
                reset(); // limpia el form
            })}
            className="space-y-4 p-4 border rounded-md"
        >
            <input
                type="text"
                placeholder="Título"
                {...register("title", { required: true })}
                className="border p-2 w-full"
            />
            <textarea
                placeholder="Contenido"
                {...register("body", { required: true })}
                className="border p-2 w-full"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Guardar
            </button>
        </form>
    );
};
