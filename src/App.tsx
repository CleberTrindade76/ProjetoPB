import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
