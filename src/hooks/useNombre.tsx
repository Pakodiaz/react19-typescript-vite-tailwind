import { useState } from "react";

export function useNombre() {
    const [nombre, setNombre] = useState("Juan");

    const cambiarNombre = (nombre: string) => setNombre(nombre);


    return {
        nombre,
        cambiarNombre,
    };

}