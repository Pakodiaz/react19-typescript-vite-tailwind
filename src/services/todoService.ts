import {Todo} from "../types/todo.ts"

let todos: Todo[] = [
    { id: 1, title: "Aprender Typescript", completed: false},
    { id: 2, title: "Aprender React", completed: false},
    { id: 3, title: "Aprender Redux", completed: false},
]

export const getTodos = (): Promise<Todo[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([...todos]);
        }, 1500);
    });
}

export const addTodo = (newTodo: Omit<Todo, "id">): Promise<Todo> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const todo = { id: Date.now(), ...newTodo };
            todos.push(todo);
            resolve(todo);
        }, 500);
    });
};

export const updateTodo = (updatedTodo: Todo): Promise<Todo> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            todos = todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t));
            resolve(updatedTodo);
        }, 500);
    });
};

export const deleteTodo = (id: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            todos = todos.filter((t) => t.id !== id);
            resolve();
        }, 500);
    });
};