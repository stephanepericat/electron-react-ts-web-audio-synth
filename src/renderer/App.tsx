import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import { Button } from '../components/ui/button';
import './App.css';

function Hello() {
  return (
    <div>
      <h1 className="text-center p-8">
        <Button>Hello Tailwind!</Button>
      </h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
