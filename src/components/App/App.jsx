import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';

import './App.css';

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
