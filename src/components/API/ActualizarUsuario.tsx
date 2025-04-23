import { useState, useEffect } from "react";

// Tipado de datos de un usuario
type Usuario = {
    id: number;
    name: string;
    email: string;
    phone: string;
};

export default function ActualizarUsuario({ id }: { id: number }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        // Cargar los datos del usuario al cargar el componente
        const fetchData = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            const data: Usuario = await response.json();
            setName(data.name);
            setEmail(data.email);
            setPhone(data.phone);
        };
        fetchData();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const updatedUser: Usuario = { id, name, email, phone };

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedUser),
            }
        );

        const result = await response.json();
        console.log("Usuario actualizado: ", result);
    };

    return (
        <div className="max-w-xl mx-auto p-4 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Actualizar Usuario</h2>
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
                    Actualizar Usuario
                </button>
            </form>
        </div>
    );
}
