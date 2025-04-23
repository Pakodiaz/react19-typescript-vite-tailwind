import { useState } from "react";
import { useFetch } from "../../hooks/useFetch"

// Tipado de datos de un nuevo usuario
type Usuario = {
    id: number;
    name: string;
    email: string;
    phone: string;
};

export default function CrearUsuario() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const { data, loading, error } = useFetch<Usuario[]>(
        "https://jsonplaceholder.typicode.com/users"
    );

    // Función para enviar el formulario con un nuevo usuario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newUser: Omit<Usuario, "id"> = { name, email, phone };

        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });

        const result = await response.json();
        console.log("Usuario creado: ", result);
    };

    return (
        <div className="max-w-xl mx-auto p-4 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Crear un nuevo usuario</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre"
                    className="p-2 w-full border rounded-md"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="p-2 w-full border rounded-md"
                />
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Teléfono"
                    className="p-2 w-full border rounded-md"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Crear Usuario
                </button>
            </form>
        </div>
    );
}
