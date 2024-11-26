import React from 'react';
import './App.css'; // Para tus estilos personalizados
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login'; // Componente de Login
import Dashboard from './Components/Dashboard'; // Componente donde está todo el contenido (Slider, Galería, etc.)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <Router>
      {/* Contenedor principal */}
      
        {/* Definición de rutas */}
        <Routes>
          {/* Ruta para el Login */}
          <Route path="/" element={<Login />} />

          {/* Ruta para el Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      
    </Router>
  );
};

export default App;
