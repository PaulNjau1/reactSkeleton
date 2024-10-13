// src/App.tsx
import React from 'react';
import DataDisplay from './components/DataDisplay';
import './index.css'; // Ensure Tailwind CSS is imported

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <DataDisplay />
    </div>
  );
};

export default App;
