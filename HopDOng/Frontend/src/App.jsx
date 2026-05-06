import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS của Bootstrap
import HopDongManager from './pages/HopDongManager'; // Import giao diện của bạn

function App() {
  return (
    <div className="App bg-light min-vh-100 py-4">
      <HopDongManager />
    </div>
  );
}

export default App;