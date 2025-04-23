/*import Button from '../components/Button';
import React from "react";

const Home: React.FC = () => {
  const handleClick = () => {
      console.log('clicked');
  }
  return(
      <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 text-gray-600">¡Bienvenido a React + TypeScript!</h1>
              <Button label="Haz clic aquí" onClick={handleClick} />
          </div>
      </div>
  );
};

export default Home;*/


import Counter from "../components/Counter.tsx";
import {TodoProvider} from "../context/TodoContext.tsx";
import {TodoList} from "../components/TodoList.tsx";
import {Toaster} from "react-hot-toast";

export default function Home() {

    // @ts-ignore
    return (<>
        <h1 className="text-2xl font-bold">Home Page</h1>
            <div className="space-y-6">
                <h1 className="text-3xl font-bold text-indigo-600">Inicio</h1>
                <Counter initialValue={5} />
            </div>

            <TodoProvider>
                <main className="min-h-screen bg-gray-100 p-6">
                    <section className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
                        <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">📝 Todo List App</h1>
                        <TodoList />
                    </section>
                    <Toaster  position="top-center" />
                </main>
            </TodoProvider>
    </>

    );
}
