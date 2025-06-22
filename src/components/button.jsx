import React from 'react';
import './button.css';

const Button = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${className}`}
      onMouseDown={(e) => e.currentTarget.classList.add('pressed')}
      onMouseUp={(e) => e.currentTarget.classList.remove('pressed')}
    >
      {children}
    </button>
  );
};

export { Button };
