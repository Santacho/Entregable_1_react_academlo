import React from 'react';
import './Button.css';

const Button = ({ onClick }) => {
  return (
    <button className="change-button" onClick={onClick}>
      Change Quote
    </button>
  );
};

export default Button;
