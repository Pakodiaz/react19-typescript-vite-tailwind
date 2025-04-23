import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/UserContext";
import { TodoProvider } from "./context/TodoContext";
import { TodoList } from "./components/TodoList";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   {/* <App />*/}
   {/*   <AppRouter />*/}

      <UserProvider>
          <RouterProvider router={router} />
          <Toaster position="top-right" />
      </UserProvider>

      <TodoProvider>
          <main className="min-h-screen bg-gray-100 p-6">
              <section className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
                  <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">📝 Todo List App</h1>
                  <TodoList />
              </section>
              <Toaster richColors position="top-center" />
          </main>
      </TodoProvider>

  </StrictMode>,
)
