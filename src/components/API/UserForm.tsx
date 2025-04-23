import InputControl from "./InputControl";
import { useState } from "react";

export type User = {
    id?: number;
    name: string;
    email: string;
    phone: string;
};

type UserFormProps = {
    onSubmit: (user: User) => void;
    initialUser?: User;
    submitLabel: string;
};

export default function UserForm({
                                     onSubmit,
                                     initialUser = { name: "", email: "", phone: "" },
                                     submitLabel,
                                 }: UserFormProps) {
    const [user, setUser] = useState<User>(initialUser);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!user.name) newErrors.name = "El nombre es requerido.";
        if (!user.email || !/\S+@\S+\.\S+/.test(user.email))
            newErrors.email = "Email inválido.";
        if (!user.phone || user.phone.length < 7)
            newErrors.phone = "Teléfono inválido.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        onSubmit(user);
        setUser({ name: "", email: "", phone: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <InputControl
                label="Nombre"
                name="name"
                value={user.name}
                onChange={handleChange}
                error={errors.name}
            />
            <InputControl
                label="Email"
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                error={errors.email}
            />
            <InputControl
                label="Teléfono"
                name="phone"
                type="tel"
                value={user.phone}
                onChange={handleChange}
                error={errors.phone}
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
            >
                {submitLabel}
            </button>
        </form>
    );
}
