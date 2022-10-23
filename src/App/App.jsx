import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRoutes from './Routes';
import Menu from '../Components/Menu/Menu';

export default function App() {
  return (
    <>
      <Menu />
      <AppRoutes />
    </>
  );
}
