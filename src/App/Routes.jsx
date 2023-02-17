import { Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
