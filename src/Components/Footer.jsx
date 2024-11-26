import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="py-4">
      <div className="container">
        <div className="row justify-content-between text-center text-md-start">
          {/* INFORMACIÓN */}
          <div className="col-md-3 mb-4 mb-md-0 text-center">
            <a className="navbar-brand" href="index.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 18.004h-4.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99a3.468 3.468 0 0 1 3.307 2.444" />
                <path d="M20 21l2 -2l-2 -2" />
                <path d="M17 17l-2 2l2 2" />
              </svg>
            </a>
            <p className="mt-3 mb-1">+51 937 094 291</p>
            <p className="mb-1">contacto@cloudcomputing.com</p>
            <p className="mb-1">Av. Cuba 152</p>
            <p>Jesús María, Lima, Perú</p>
          </div>

          {/* ENLACES */}
          <div className="col-md-3 mb-4 mb-md-0 text-center">
            <h5 className="fw-bold mb-3">Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="tecnologias.html#main-tecnologias" className="text-light text-decoration-none">
                  Inicio
                </a>
              </li>
              <li>
                <a href="servicios.html#main-servicios" className="text-light text-decoration-none">
                  Galeria
                </a>
              </li>
              <li>
                <a href="casos-de-uso.html#main-casos-de-uso" className="text-light text-decoration-none">
                  Formulario
                </a>
              </li>
              <li>
                <a href="contacto.html#main-contacto" className="text-light text-decoration-none">
                  Foro
                </a>
              </li>
            </ul>
          </div>

          {/* SUSCRIPCIÓN */}
          <div className="col-md-3 mb-4 mb-md-0 text-center">
            <h5 className="fw-bold mb-3">Suscribirse</h5>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control text-center"
                  id="email"
                  placeholder="Ingresa tu correo"
                />
              </div>
              <button type="submit" className="btn btn-warning w-100">
                Enviar
              </button>
            </form>
          </div>

          {/* REDES SOCIALES */}
          <div className="col-md-3 text-center">
            <h5 className="fw-bold mb-3">Síguenos</h5>
            <div className="d-flex justify-content-center gap-5">
              <a href="https://www.facebook.com/" className="text-light social-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffff" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="40" 
                  height="40" 
                  strokeWidth="1.75"
                >
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/" className="text-light social-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="40"
                  height="40"
                  strokeWidth="1.75"
                >
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M16.5 7.5l0 .01"></path>
                </svg>
              </a>
              <a href="https://www.twitter.com/" className="text-light social-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-x"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  strokeWidth="1.75"
                  stroke="#ffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
            </div>
          </div>

        </div>
        <div className="text-center mt-4">
          <p className="text-light mb-0">
            Creado por Luis Trujillo & Marcos Gamero <br />© Derechos reservados 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
