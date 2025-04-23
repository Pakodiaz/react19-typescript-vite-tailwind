import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../components/API/UserFormContext";
import toast from "react-hot-toast";

type UserContextType = {
    users: User[];
    addUser: (user: User) => void;
    deleteUser: (id: number) => void;
    updateUser: (user: User) => void;
    editingUser: User | null;
    setEditingUser: (user: User | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    const addUser = (user: User) => {
        const newUser = { ...user, id: Date.now() };
        setUsers((prev) => [...prev, newUser]);
        toast.success("Usuario creado");
    };

    const deleteUser = (id: number) => {
        setUsers((prev) => prev.filter((u) => u.id !== id));
        toast.success("Usuario eliminado");
    };

    const updateUser = (updated: User) => {
        setUsers((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));
        toast.success("Usuario actualizado");
        setEditingUser(null);
    };

    return (
        <UserContext.Provider
            value={{ users, addUser, deleteUser, updateUser, editingUser, setEditingUser }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUserContext must be used within a UserProvider");
    return context;
};
