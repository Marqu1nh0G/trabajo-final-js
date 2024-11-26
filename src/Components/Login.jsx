import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para la redirección
import './Login.css';
import Img from '../img/img-IA.png'

const Login = () => {
  const navigate = useNavigate(); // Para redirigir al Dashboard
  const [email, setEmail] = useState(''); // Estado para el email
  const [password, setPassword] = useState(''); // Estado para la contraseña

  const handleLogin = (e) => {
    e.preventDefault();
    // Redirige al Dashboard si se ingresan datos en los campos
    if (email && password) {
      navigate('/dashboard'); // Redirección a /dashboard
    } else {
      alert('Por favor, ingresa un correo electrónico y una contraseña.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        {/* Imagen del fondo */}
        <img
          src={Img}
          alt="Inteligencia Artificial Fondo"
          className="login-image"
        />
        <h1 className="login-logo"></h1>
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Iniciar Sesión</h2>
          {/* Campo de Correo Electrónico */}
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Campo de Contraseña */}
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Términos y condiciones */}
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Acepto los Términos y condiciones</label>
          </div>
          {/* Botón de Inicio de Sesión */}
          <button type="submit" className="login-btn">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
