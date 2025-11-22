import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaExpand, FaStar, FaHotel } from 'react-icons/fa';

const Gallery: React.FC = () => {
  const images = [
    { id: 1, src: '', alt: 'Luxury Hotel Exterior', caption: 'Our stunning hotel exterior' },
    { id: 2, src: '', alt: 'Executive Room', caption: 'Luxuriously appointed rooms' },
    { id: 3, src: '', alt: 'Fine Dining Restaurant', caption: 'Gourmet dining experience' },
    { id: 4, src: '', alt: 'Infinity Swimming Pool', caption: 'Relaxing pool area' },
    { id: 5, src: '', alt: 'Spa & Wellness Center', caption: 'Rejuvenation & relaxation' },
    { id: 6, src: '', alt: 'Conference Hall', caption: 'State-of-the-art facilities' },
    { id: 7, src: '', alt: 'Garden View', caption: 'Tranquil garden setting' },
    { id: 8, src: '', alt: 'Presidential Suite', caption: 'Ultimate luxury experience' }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center">Our Gallery</h1>
        <p className="text-center" style={{ color: '#6c757d', marginBottom: '40px' }}>
          Discover the luxury and elegance of our hotel
        </p>
      </motion.div>
      
      <motion.div 
        className="slideshow-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="mySlides fade">
          <div className="numbertext">
            {currentImageIndex + 1} / {images.length}
          </div>
          <motion.div 
            className="image-placeholder" 
            style={{ 
              height: '500px', 
              backgroundColor: '#f8f9fa', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setLightboxOpen(true)}
            style={{ cursor: 'pointer' }}
          >
            <FaHotel size={80} color="#0d6efd" opacity={0.2} />
            <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              padding: '20px',
              color: 'white',
              fontSize: '1.2rem'
            }}>
              {images[currentImageIndex].caption}
            </div>
            <FaExpand style={{ position: 'absolute', top: '20px', right: '20px', color: 'white' }} />
          </motion.div>
        </div>

        <motion.button 
          className="prev"
          onClick={prevImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '10px', 
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <FaArrowLeft />
        </motion.button>
        
        <motion.button 
          className="next"
          onClick={nextImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ 
            position: 'absolute', 
            top: '50%', 
            right: '10px', 
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <FaArrowRight />
        </motion.button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {images.map((_, index) => (
          <motion.span 
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            style={{ 
              cursor: 'pointer',
              height: '15px', 
              width: '15px', 
              margin: '0 5px', 
              backgroundColor: index === currentImageIndex ? '#0d6efd' : '#bbb', 
              borderRadius: '50%', 
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }}
          ></motion.span>
        ))}
      </div>

      <motion.div 
        className="gallery-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '25px', 
          marginTop: '40px' 
        }}
      >
        {images.map((image, index) => (
          <motion.div 
            key={image.id} 
            className="gallery-item"
            whileHover={{ y: -10, boxShadow: '0 20px 30px rgba(0,0,0,0.1)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            style={{ 
              textAlign: 'center', 
              borderRadius: '10px',
              overflow: 'hidden',
              backgroundColor: 'white',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
            }}
          >
            <motion.div 
              className="image-placeholder" 
              style={{ 
                height: '200px', 
                backgroundColor: '#f8f9fa', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                position: 'relative'
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setCurrentImageIndex(index);
                setLightboxOpen(true);
              }}
              style={{ cursor: 'pointer' }}
            >
              <FaHotel size={50} color="#0d6efd" opacity={0.1} />
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '10px',
                fontSize: '0.9rem'
              }}>
                {image.alt}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="text-center" 
        style={{ marginTop: '40px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link to="/" className="btn btn-outline">
          <FaArrowLeft style={{ marginRight: '10px' }} />Back to Home
        </Link>
      </motion.div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <motion.div 
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightboxOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer'
          }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            style={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '90%'
            }}
          >
            <FaHotel size={150} color="#0d6efd" opacity={0.1} style={{ margin: '0 auto', display: 'block' }} />
            <div style={{ 
              position: 'absolute', 
              bottom: '20px', 
              left: 0, 
              right: 0, 
              color: 'white',
              textAlign: 'center',
              fontSize: '1.5rem',
              padding: '10px',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.8))'
            }}>
              {images[currentImageIndex].alt}
            </div>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            ×
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;