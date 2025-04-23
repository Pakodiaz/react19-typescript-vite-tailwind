import { useEffect, useState } from "react";
import { PostForm } from "../components/PostForm";
import { PostList } from "../components/PostList";
import { Post } from "../types/Post";
import { getPosts, createPost, updatePost, deletePost } from "../components/API/PotsApi.ts";

export const PostsPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [editingPost, setEditingPost] = useState<Post | undefined>();

    const loadPosts = async () => {
        const res = await getPosts();
        setPosts(res.data.slice(0, 10)); // Solo 10 para no saturar
    };

    const handleSave = async (post: Post) => {
        if (post.id) {
            await updatePost(post);
        } else {
            await createPost(post);
        }
        setEditingPost(undefined);
        loadPosts();
    };

    const handleDelete = async (id: number) => {
        await deletePost(id);
        loadPosts();
    };

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">CRUD con Axios y TS</h1>
            <PostForm onSubmit={handleSave} defaultValues={editingPost} />
            <PostList posts={posts} onEdit={setEditingPost} onDelete={handleDelete} />
        </div>
    );
};
