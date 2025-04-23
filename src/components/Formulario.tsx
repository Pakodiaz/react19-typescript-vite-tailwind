import {useState} from "react";

export default function Formulario() {
    const [nombre, setNombre] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ nombre, email});
    };

    const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(e.target.value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    return (<>
    <h1 className="text-3xl font-bold text-indigo-600">`Hello, my name is ${nombre} and email ${email}.`</h1>
            <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-xl shadow">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={handleNombreChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                        placeholder="Tu nombre"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Correo</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                        placeholder="correo@ejemplo.com"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                    Enviar
                </button>
            </form>
    </>

    );

}