import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Artist } from './Pages/Artist';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/artist" replace />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/gamedev" element={<h1>Game Dev</h1>} />
        <Route path="/cybercrime" element={<h1>Cybercrime</h1>} />
        <Route path="/uiux" element={<h1>UI/UX</h1>} />
      </Routes>
    </div>
  );
}

export default App;