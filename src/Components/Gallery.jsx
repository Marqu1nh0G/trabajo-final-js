import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css'

const Gallery = () => {
  const [images, setImages] = useState([]); // Estado para almacenar imágenes
  const [search, setSearch] = useState(''); // Estado para el texto de búsqueda
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    fetchImages(); // Llamar a la API al cargar el componente
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: 'technology', // Búsqueda inicial
          per_page: 10, // Número de imágenes a obtener
        },
        headers: {
            Authorization: `Client-ID MXKMbJNqWJpoBRyl4lGnhgZ2eS-Zj4AkUFgwefgYYS4`,
            // Sustituye con tu clave
        },
      });

      setImages(response.data.results); // Almacena las imágenes
      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    setSearch(e.target.value);

    if (e.target.value.trim() === '') {
      fetchImages(); // Si el campo de búsqueda está vacío, vuelve a cargar tecnología
      return;
    }

    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: e.target.value, // Buscar según el texto ingresado
          per_page: 10,
        },
        headers: {
            Authorization: `Client-ID MXKMbJNqWJpoBRyl4lGnhgZ2eS-Zj4AkUFgwefgYYS4`,

        },
      });

      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images for search:', error);
    }
  };

  return (
    <div className="gallery-container" id='galeria'>
      <header className="header">
        <h1>Galería de Imagenes</h1>
        <input
          type="text"
          placeholder="Buscar tecnología..."
          value={search}
          onChange={handleSearch}
          className="search-input"
        />
      </header>
      <main>
        {loading ? (
          <p className="loading">Cargando imágenes...</p>
        ) : (
          <div className="gallery">
            {images.length > 0 ? (
              images.map((image) => (
                <div className="gallery-item" key={image.id}>
                  <img
                    src={image.urls.small}
                    alt={image.alt_description || 'Imagen de tecnología'}
                    className="gallery-image"
                  />
                  <p className="image-title">{image.description || 'Tecnología'}</p>
                </div>
              ))
            ) : (
              <p>No se encontraron imágenes para tu búsqueda.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Gallery;
