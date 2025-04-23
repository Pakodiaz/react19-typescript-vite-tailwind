// src/routes/Layout.tsx
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gray-900 text-white p-4">
                <nav className="flex gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/usestate-map">useState and map</Link>
                    <Link to="/useeffect">useEffect</Link>
                    <Link to="/custom-hook">Custon Hook</Link>
                    <Link to="/api-crud">API CRUD</Link>
                    <Link to="/api-crud-context">API CRUD Context</Link>
                    <Link to="/api-axios">API con Axios</Link>
                </nav>
            </header>

            <main className="flex-1 p-4">
                <Outlet />
            </main>

            <footer className="bg-gray-200 text-center p-4 text-sm">
                © 2025 - Burrito Corp.
            </footer>
        </div>
    );
}
