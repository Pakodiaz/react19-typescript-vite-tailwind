import axios from "axios";
import { Post } from "../../types/Post";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = () => api.get<Post[]>("/posts");
export const getPost = (id: number) => api.get<Post>(`/posts/${id}`);
export const createPost = (post: Post) => api.post<Post>("/posts", post);
export const updatePost = (post: Post) => api.put<Post>(`/posts/${post.id}`, post);
export const deletePost = (id: number) => api.delete(`/posts/${id}`);
