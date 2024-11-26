import React from "react";
import slider_1 from '../img/slider-1.jpg'
import slider_2 from '../img/slider-2.jpg'
import slider_3 from '../img/slider-3.jpg'
const CarouselBootstrap = () => {
  return (
    <div id="inicio">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      {/* Indicadores */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Contenedor de las imágenes */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slider_1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={slider_2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={slider_3} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>

      {/* Controles */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
};

export default CarouselBootstrap;
