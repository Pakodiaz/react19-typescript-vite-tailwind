import {User} from "../types/User";

type Props = {
    user: User;
}

export default function TarjetaUsuario({user}: Props) {
    return (
        <div className="border p-4 rounded shadow bg-white">
            <h3 className="text-lg font-semibold text-indigo-700">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
        </div>
    );
}