import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const fetchNotas = async () => {
      try {
        // Realizar una solicitud GET al endpoint
        const response = await fetch("http://localhost:3000/api/notas");

        if (!response.ok) {
          throw new Error("Error al obtener notas desde el backend");
        }

        // Verificar el contenido de las notas
        const data = await response.json();
        console.log("Notas recibidas desde el backend:", data);

        setNotas(data);
      } catch (error) {
        console.error(error.message);
        // Manejar el error de manera adecuada(mostrar un mensaje al usuario)
      }
    };

    // Llamar a la función de obtención de notas
    fetchNotas();
  }, []);

  return (
    <div>
      <header>
        <h1>Bienvenidos a mi aplicación de notas de texto</h1>
        <p>Esta es la página principal de la aplicación.</p>
      </header>

      <section>
        <h2>Notas:</h2>
        <ul>
          {notas.map((nota) => (
            <li key={nota.id}>
              <strong>{nota.titulo}:</strong> {nota.texto}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
