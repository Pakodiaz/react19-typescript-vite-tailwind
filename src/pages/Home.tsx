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

export default function Home() {

    return (<>
        <h1 className="text-2xl font-bold">Home Page</h1>
            <div className="space-y-6">
                <h1 className="text-3xl font-bold text-indigo-600">Inicio</h1>
                <Counter initialValue={5} />
            </div>
    </>

    );
}
