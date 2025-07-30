import React, { useContext } from 'react';
import { TemaContext } from '../context/TemaContext.jsx';

const Footer = () => {
  const { tema } = useContext(TemaContext);
  const color = 
    tema === 'dark' 
    ? 'text-white' 
    : 'text-black';

  const borderTopStyle =
    tema === 'dark'
      ? '2px solid rgba(255,255,255,0.1)'
      : '2px solid rgba(0,0,0,0.1)';

  return (
    <footer
      className={`bg-${tema} ${color}`}
      style={{
        textAlign: 'center',
        borderTop: borderTopStyle,
        padding: '1rem 0',
      }}
    >
      <div className={`mb-2 ${color}`}>
        &copy; {new Date().getFullYear()} Movie App. All rights reserved.
      </div>

      <div style={{ fontSize: '1.5rem' }}>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className={`bi bi-instagram ${color}`}></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className={`bi bi-twitter ${color}`}></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className={`bi bi-facebook ${color}`}></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
