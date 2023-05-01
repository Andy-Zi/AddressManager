import 'tailwindcss/tailwind.css';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar';
import Home from './views/Home';
import Clients from './views/Clients';
import Settings from './views/Settings';
import Listview from './views/Listview';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/listview" element={<Listview />} />
      </Routes>
    </Router>
  );
}
