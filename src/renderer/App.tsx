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
import SingleViewNav from './components/SingleViewNav';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="singleView/:ClientId" element={<SingleViewNav />}>
          <Route index element={<SingleKundeView />} />
          <Route path=":CarID" element={<SingleAutoView />} />
        </Route>
        <Route path="settings" element={<Settings />} />
        <Route path="listView" element={<ListView />} />
      </Routes>
    </Router>
  );
}
