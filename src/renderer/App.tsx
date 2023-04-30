import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar';
import Home from './views/Home';

export default function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}
