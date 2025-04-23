import { Post } from "../types/Post";

interface Props {
    posts: Post[];
    onEdit: (post: Post) => void;
    onDelete: (id: number) => void;
}

export const PostList = ({ posts, onEdit, onDelete }: Props) => (
    <ul className="space-y-4 mt-4">
        {posts.map((post) => (
            <li key={post.id} className="border p-4 rounded shadow">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p>{post.body}</p>
                <div className="space-x-2 mt-2">
                    <button
                        onClick={() => onEdit(post)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => onDelete(post.id!)}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                        Eliminar
                    </button>
                </div>
            </li>
        ))}
    </ul>
);
