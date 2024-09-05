import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    // Redirige a "admin.client.edusnapec.com" cuando el componente se monta
    window.location.href = 'https://admin.client.edusnapec.com';
  }, []);
  return (
    <div className="App">
      <div>
        Redirigiendo...
      </div>
    </div>
  );
}

export default App;
