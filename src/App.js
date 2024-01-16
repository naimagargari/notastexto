// import React from "react";

// function App() {
//   return (
//     <div>
//       <h1>Bienvenido a mi aplicación de notas de texto</h1>
//       <p>Esta es la página principal de la aplicación.</p>
//       {/* Puedes agregar más componentes y contenido aquí */}
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState, useEffect } from "react";

function App() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    // Realizar una solicitud GET al endpoint /api/notas del backend
    fetch("http://localhost:3000/api/notas")
      .then((response) => response.json())
      .then((data) => {
        // Console.log para verificar el contenido de las notas
        console.log("Notas recibidas desde el backend:", data);

        setNotas(data);
      })
      .catch((error) => {
        // console.error("Error al obtener notas desde el backend:", error);
      });
  }, []); 

  return (
    <div>
      <h1>Bienvenido a mi aplicación de notas de texto</h1>
      <p>Esta es la página principal de la aplicación.</p>

      <h2>Notas:</h2>
      <ul>
        {notas.map((nota) => (
          <li key={nota.id}>
            <strong>{nota.titulo}:</strong> {nota.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
