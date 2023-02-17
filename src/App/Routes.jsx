import { Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import Maintenance from '../Pages/Maintenance';
import About from '../Pages/About';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Maintenance />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
