import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import './App.css';
import Hello from './components/Hello';
import Photo from './components/Photo'



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/photo" element={<Photo />}/>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
