// client/src/components/LoadingOverlay.js
import React from 'react';
import '../styles/LoadingOverlay.css';

function LoadingOverlay() {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );
}

export default LoadingOverlay;