import 'tailwindcss/tailwind.css';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import './styles/components/Navbar.css';
import Home from './views/Home';
import SingleKundeView from './views/SingleKundeView';
import SingleAutoView from './views/SingleAutoView';
import Settings from './views/Settings';
import ListView from './views/ListView';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="singleView/:ClientId" element={<SingleKundeView />} />
        <Route
          path="singleView/:ClientId/:CarID"
          element={<SingleAutoView />}
        />
        <Route path="settings" element={<Settings />} />
        <Route path="listView" element={<ListView />} />
      </Routes>
    </Router>
  );
}
