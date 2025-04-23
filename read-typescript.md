Resumen Profesional de TypeScript para React

✅ 1. Tipos Primitivos

string, number, boolean, null, undefined

Ejemplo:

const nombre: string = "Juan";

const edad: number = 30;


✅ 2. Tipos de Arrays y Tuplas

string[], number[], [string, number]

Ejemplo:


const frutas: string[] = ["manzana", "pera"];

const coordenadas: [number, number] = [10, 20];

✅ 3. Interfaces y Tipos Personalizados

Para props, datos, usuarios, formularios, etc.

Ejemplo:

interface Usuario {
id: number;
nombre: string;
email: string;
}

✅ 4. Union Types y Optional

string | number para valores múltiples.

propiedad?: string para opcionales.

Ejemplo:


type ID = string | number;

interface Post {
id?: ID;
titulo: string;
}

✅ 5. Funciones tipadas

Tipar argumentos y retorno.

Ejemplo:


const saludar = (nombre: string): string => {
return `Hola, ${nombre}`;
};

✅ 6. Tipos en Eventos (muy importante en React)

Para onChange, onSubmit, etc.

Ejemplo:

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
console.log(e.target.value);
};

✅ 7. Hooks tipados (useState, useEffect, useContext, etc.)

Tipar estado inicial:


const [contador, setContador] = useState<number>(0);
const [usuario, setUsuario] = useState<Usuario | null>(null);

✅ 8. Props tipadas

En componentes funcionales.

Ejemplo:


interface Props {
nombre: string;
edad: number;
}


const Tarjeta = ({ nombre, edad }: Props) => (
  <div>{nombre} - {edad}</div>
);

✅ 9. Custom Hooks tipados

Definir interfaces para entradas y salidas.

Ejemplo:


const useContador = (inicial: number): [number, () => void] => {

const [valor, setValor] = useState(inicial);

const incrementar = () => setValor(v => v + 1);
return [valor, incrementar];
};

✅ 10. Axios y Fetch con Tipado

Tipar las respuestas de las APIs.

Ejemplo:


const getUsuarios = async (): Promise<Usuario[]> => {

const res = await axios.get<Usuario[]>("/api/usuarios");
return res.data;
};

✅ 11. Context API con tipos

Tipar context, value, dispatch, etc.

Ejemplo:

interface AuthContextType {
user: Usuario | null;
login: (user: Usuario) => void;
logout: () => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

✅ 12. react-hook-form y Zod

Tipar formularios para validaciones limpias.

Ejemplo:


const { register, handleSubmit } = useForm<FormData>();

interface FormData {
email: string;
password: string;
}

✅ 13. Tipado de Children (componente envolvente)

Ejemplo:


interface Props {
children: React.ReactNode;
}


const Layout = ({ children }: Props) => <div>{children}</div>;

✅ 14. Inferencia + Tipado explícito

Usa inferencia cuando es claro.

Usa explícito en lógica compleja o reutilizable.

Ejemplo:


const mensaje = "Hola"; // inferido como string ✅

const suma: (a: number, b: number) => number = (a, b) => a + b; // explícito ✅

✅ 15. Types vs Interfaces

type: más flexible (union, funciones, utilidades).

interface: ideal para objetos y props de componentes.

En React, se usan ambos según el caso.