import React from 'react';
import './styles/App.css';
import AppRouter from './AppRouter';
import { MyProvider } from "./context/context";

const App: React.FC = () => {
  return (
    <MyProvider>
      <div className="App">
        <AppRouter />
      </div>
    </MyProvider>
  );
}

export default App;
