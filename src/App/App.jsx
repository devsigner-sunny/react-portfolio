import React from 'react';
import AppRoutes from './Routes';
import Menu from '../Components/Menu/Menu';
import './App.scss';

export default function App() {
  return (
    <>
      <Menu />
      <div className="container px-32 py-10">
        <AppRoutes />
      </div>
    </>
  );
}
