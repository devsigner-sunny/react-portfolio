import React from 'react';
import AppRoutes from './Routes';
import Menu from '../Components/Menu/Menu';
import './App.scss';

export default function App() {
  return (
    <>
      <div className="px-32 py-3">
        <AppRoutes />
      </div>
    </>
  );
}
