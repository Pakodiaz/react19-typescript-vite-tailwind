import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
