import React, { createContext, useContext, useEffect, useState } from "react";
import { Todo } from "../types/todo";
import * as todoService from "../services/todoService";

type TodoContextType = {
    todos: Todo[];
    loading: boolean;
    fetchTodos: () => void;
    add: (todo: Omit<Todo, "id">) => void;
    update: (todo: Todo) => void;
    remove: (id: number) => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchTodos = async () => {
        setLoading(true);
        const data = await todoService.getTodos();
        setTodos(data);
        setLoading(false);
    };

    const add = async (todo: Omit<Todo, "id">) => {
        const newTodo = await todoService.addTodo(todo);
        setTodos((prev) => [...prev, newTodo]);
    };

    const update = async (todo: Todo) => {
        const updated = await todoService.updateTodo(todo);
        setTodos((prev) => prev.map((t) => (t.id === todo.id ? updated : t)));
    };

    const remove = async (id: number) => {
        await todoService.deleteTodo(id);
        setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <TodoContext.Provider value={{ todos, loading, fetchTodos, add, update, remove }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodos debe usarse dentro de <TodoProvider>");
    }
    return context;
};
