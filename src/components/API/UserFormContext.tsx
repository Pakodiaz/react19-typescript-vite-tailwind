import { useEffect, useState } from "react";

export type User = {
    id?: number;
    name: string;
    email: string;
    phone: string;
};

type Props = {
    onSubmit: (user: User) => void;
    initialValues?: User;
    submitLabel?: string;
};

const initialForm: User = {
    name: "",
    email: "",
    phone: "",
};

export default function UserForm({ onSubmit, initialValues, submitLabel = "Guardar" }: Props) {
    const [formData, setFormData] = useState<User>(initialForm);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (initialValues) {
            setFormData(initialValues);
        } else {
            setFormData(initialForm);
        }
    }, [initialValues]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" })); // Limpiar error al escribir
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = "El nombre es requerido.";
        }

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email inválido.";
        }

        if (
            !formData.phone ||
            !/^\d{10}$/.test(formData.phone)
        ) {
            newErrors.phone = "El teléfono debe tener 10 dígitos numéricos.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;
        onSubmit(formData);
        setFormData(initialForm);
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4  p-6 rounded-xl shadow-md">
            <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
                        errors.name ? "border-red-500 ring-red-300" : "focus:ring-blue-500"
                    }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Correo electrónico</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
                        errors.email ? "border-red-500 ring-red-300" : "focus:ring-blue-500"
                    }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Teléfono</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
                        errors.phone ? "border-red-500 ring-red-300" : "focus:ring-blue-500"
                    }`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="text-right">
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
                >
                    {submitLabel}
                </button>
            </div>
        </form>
    );
}
