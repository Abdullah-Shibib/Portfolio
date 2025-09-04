import React from 'react';
import ReactDOM from 'react-dom/client';

// Simple test component first
function TestApp() {
  return (
    <div style={{
      padding: '20px',
      color: 'white',
      backgroundColor: '#1a0b1f',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Portfolio Test - React is Working!</h1>
      <p>If you can see this, React is loading correctly.</p>
      <p>Time: {new Date().toLocaleString()}</p>
    </div>
  );
}

console.log('React app starting...');
console.log('Root element:', document.getElementById('root'));

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found!');
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Root element not found!</div>';
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<TestApp />);
    console.log('React app rendered successfully!');
  } catch (error) {
    console.error('Error rendering React app:', error);
    rootElement.innerHTML = `<div style="padding: 20px; color: red;">Error: ${error.message}</div>`;
  }
}
