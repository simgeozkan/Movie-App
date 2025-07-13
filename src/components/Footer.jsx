import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5" style={{ textAlign: 'center' }}>
      <div className="mb-2">
        &copy; {new Date().getFullYear()} Movie App. All rights reserved.
      </div>
      <div style={{ fontSize: '1.5rem' }}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
          <i className="bi bi-facebook"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer; 