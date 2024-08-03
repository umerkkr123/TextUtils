// Alert.js
import React from 'react';
import './Alert.css'; // Make sure to create this CSS file for styling

const Alert = ({ message, type, onClose }) => {
  if (!message) return null; // If there's no message, render nothing

  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      <button className="alert-close" onClick={onClose}>×</button>
    </div>
  );
};

export default Alert;
