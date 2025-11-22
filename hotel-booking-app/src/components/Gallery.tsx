import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
  const images = [
    { id: 1, src: '', alt: 'Hotel Exterior' },
    { id: 2, src: '', alt: 'Luxury Room' },
    { id: 3, src: '', alt: 'Restaurant' },
    { id: 4, src: '', alt: 'Swimming Pool' },
    { id: 5, src: '', alt: 'Spa Center' },
    { id: 6, src: '', alt: 'Conference Room' }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="container">
      <h1 className="text-center">Our Gallery</h1>
      
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">
            {currentImageIndex + 1} / {images.length}
          </div>
          <div 
            className="image-placeholder" 
            style={{ 
              height: '400px', 
              backgroundColor: '#ddd', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
          >
            <span>Image: {images[currentImageIndex].alt}</span>
          </div>
          <div className="text">{images[currentImageIndex].alt}</div>
        </div>

        <a className="prev" onClick={prevImage} style={{ cursor: 'pointer' }}>&#10094;</a>
        <a className="next" onClick={nextImage} style={{ cursor: 'pointer' }}>&#10095;</a>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {images.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
            style={{ 
              cursor: 'pointer',
              height: '15px', 
              width: '15px', 
              margin: '0 2px', 
              backgroundColor: '#bbb', 
              borderRadius: '50%', 
              display: 'inline-block',
              opacity: index === currentImageIndex ? '1' : '0.5'
            }}
          ></span>
        ))}
      </div>

      <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
        {images.map((image) => (
          <div key={image.id} className="gallery-item" style={{ textAlign: 'center' }}>
            <div 
              className="image-placeholder" 
              style={{ 
                height: '200px', 
                backgroundColor: '#eee', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '10px'
              }}
            >
              <span>{image.alt}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default Gallery;