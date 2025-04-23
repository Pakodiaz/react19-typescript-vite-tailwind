// src/routes/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Contact from "../pages/Contact.tsx";
import Usuarios from "../pages/Usuarios.tsx";
import ObtenerHora from "../pages/ObtenerHora.tsx";
import CustomHook from "../components/CustomHook.tsx";
import CrudUsuariosPage from "../pages/CrudUsuarios.tsx";
import CrudUsuariosPageContext from "../pages/CrudUsuariosContext.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path: 'usestate-map', element: <Usuarios /> },
            { path: 'useeffect', element: <ObtenerHora /> },
            { path: 'custom-hook', element: <CustomHook /> },
            { path: 'api-crud', element: <CrudUsuariosPage /> },
            { path: 'api-crud-context', element: <CrudUsuariosPageContext /> },
            { path: 'api-axios', element: <PostsPage /> },
            { path: '*', element: <NotFound /> }
        ]
    }
]);
