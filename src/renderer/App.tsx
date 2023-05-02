import 'tailwindcss/tailwind.css';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import './styles/components/Navbar.css';
import Home from './views/Home';
import Clients from './views/Clients';
import Settings from './views/Settings';
import ListView from './views/ListViews';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/listView" element={<ListView />} />
      </Routes>
    </Router>
  );
}
