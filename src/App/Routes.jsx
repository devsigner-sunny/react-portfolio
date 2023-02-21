import { Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import Maintenance from '../Pages/Maintenance';
import About from '../Pages/About';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/react-portfolio">
        <Route index element={<Maintenance />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
