import React from 'react';

function Header({ children }) {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container">
        {children}
      </div>
    </header>
  );
}

export default Header; 