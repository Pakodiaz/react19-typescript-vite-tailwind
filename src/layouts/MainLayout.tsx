import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="p-4">
            <nav className="mb-4 space-x-4">
                <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                <Link to="/about" className="text-blue-600 hover:underline">About</Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
