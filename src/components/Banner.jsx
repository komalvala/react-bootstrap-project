import React from 'react';
import { Container, Image } from 'react-bootstrap';
import blogBackground from '../assets/blog_bc.jpg';
import '../App.css';

const HeroSection = () => {
  return (
    <div>
      <Container fluid className="p-0 position-relative">
        {/* Background Image */}
        <div style={{ height: '290px', position: 'relative', overflow: 'hidden' }}>
          <Image
            src={blogBackground}
            alt="Hero Banner"
            fluid
            className="w-100 h-100 object-fit-cover"
          />

          {/* Dark Overlay */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}
          ></div>

          {/* Centered Text */}
          <div
            className="position-absolute top-50 start-50 translate-middle text-center text-white"
            style={{ zIndex: 2 }}
          >
            <h1 className="fw-bold mb-2">Contact Us</h1>
            <p className="fs-6 home">
              <span className="hero-link">Home Page</span> / Contact Us
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
